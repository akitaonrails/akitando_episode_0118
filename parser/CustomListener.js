import SQLiteParserListener from './SQLiteParserListener.js'
import {SQLiteParser} from "./SQLiteParser.js";
import {default as antlr4} from 'antlr4';

export class CustomListener extends SQLiteParserListener {
  constructor(result) {
    super();
    this.result = result;
    this.sqlStruct = null;
  }

  buildSqlStruct(command) {
    return {
	  command: command,
      columns: [],
	  values: [],
      table: [],
      conditions: [],
	  between: null,
	  range: null,
      groupby: null,
      orderby: null,
	  not: false
    };
  }

	// Enter a parse tree produced by SQLiteParser#parse.
	enterParse(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#parse.
	exitParse(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#sql_stmt_list.
	enterSql_stmt_list(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#sql_stmt_list.
	exitSql_stmt_list(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#sql_stmt.
	enterSql_stmt(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#sql_stmt.
	exitSql_stmt(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#indexed_column.
	enterIndexed_column(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#indexed_column.
	exitIndexed_column(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#column_def.
	enterColumn_def(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#column_def.
	exitColumn_def(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#type_name.
	enterType_name(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#type_name.
	exitType_name(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#column_constraint.
	enterColumn_constraint(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#column_constraint.
	exitColumn_constraint(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#signed_number.
	enterSigned_number(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#signed_number.
	exitSigned_number(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#table_constraint.
	enterTable_constraint(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#table_constraint.
	exitTable_constraint(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#foreign_key_clause.
	enterForeign_key_clause(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#foreign_key_clause.
	exitForeign_key_clause(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#conflict_clause.
	enterConflict_clause(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#conflict_clause.
	exitConflict_clause(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#with_clause.
	enterWith_clause(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#with_clause.
	exitWith_clause(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#cte_table_name.
	enterCte_table_name(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#cte_table_name.
	exitCte_table_name(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#recursive_cte.
	enterRecursive_cte(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#recursive_cte.
	exitRecursive_cte(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#common_table_expression.
	enterCommon_table_expression(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#common_table_expression.
	exitCommon_table_expression(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#delete_stmt.
	enterDelete_stmt(ctx) {
		this.sqlStruct = this.buildSqlStruct('delete')
		ctx.children.forEach(child => {
			switch(child.constructor.name) {
				case 'Qualified_table_nameContext':
					this.sqlStruct.table = child.getText()
					break;
				case 'ExprContext':
					this.enterExpr_recursiveChildren(child.children)
					break;
				}
			})
	}

	// Exit a parse tree produced by SQLiteParser#delete_stmt.
	exitDelete_stmt(ctx) {
		if(this.sqlStruct && this.sqlStruct.command === 'delete') {
			var sql = []
			var conditions = null
			if(this.sqlStruct.conditions && this.sqlStruct.conditions.length > 0) {
				conditions = this.sqlStruct.conditions.join(' ')
			}
			if(isNaN(parseInt(conditions))) {
				sql.push(`deleteFrom('${this.sqlStruct.table}', `)
				sql.push(`{ where: "${conditions}" }`)
			} else {
				sql.push(`deleteId('${this.sqlStruct.table}', `);
				sql.push(this.sqlStruct.conditions.pop())
			}
			sql.push(`)`);
			this.result.push(sql.join(''))
			this.sqlStruct = null;
		}
	}

	enterExpr_invertOp(op) {
		if(!this.sqlStruct.not)
			return op;
		if (op !== '.')
			this.sqlStruct.not = false;
		switch(op) {
			case '=':
				return '!=';
			case '<>', '!=':
				return '=';
			case '>':
				return '<=';
			case '<':
				return '>=';
			case '>=':
				return '<';
			case '<=':
				return '>';
			default:
				return op;
		}
	}

	enterExpr_terminalNode(child) {
		var op = this.enterExpr_invertOp(child.getText().toUpperCase());

		switch(op) {
			case '=': case 'IS':
				return '===';
			case '<>': case 'IS NOT':
				return '!==';
			case 'AND':
				return '&&';
			case 'OR':
				return '||';
			default:
				return op;
		}
	}

	enterExpr_exprContext(child) {
		if(child.constructor.name === 'ExprContext') {
			this.enterExpr_recursiveChildren(child.children)
		} else {
			return this.escape(child.getText())
		}
	}

	escape(str) {
		return str.replace(/\\/g, "\\\\")
			.replace(/\$/g, "\\$")
			.replace(/'/g, "\\'")
			.replace(/"/g, "\\\"");
	}

	enterExpr_recursiveChildren(children) {
		var custom_column = []
		var interval = null
		children.forEach(child => {
			switch (child.constructor.name) {
			case 'Table_nameContext':
				custom_column.push(this.escape(child.getText()))
				break;
			case 'Column_nameContext':
				custom_column.push(this.escape(child.getText()))
				this.sqlStruct.conditions.push(custom_column.join(''))
				custom_column = []
				break;
			case 'TerminalNodeImpl':
				var terminal = this.enterExpr_terminalNode(child)
				if (custom_column.length === 0) {
					if(this.sqlStruct.range) {
						this.sqlStruct.range.push(terminal)
					} else {
						this.sqlStruct.conditions.push(terminal)
					}
				} else {
					custom_column.push(terminal)
				}
				if (terminal === 'BETWEEN') {
					this.sqlStruct.between = []
					this.sqlStruct.conditions.pop()
				}
				if (terminal === 'AND' && this.sqlStruct.between) {
					this.sqlStruct.conditions.pop()
				}
				if (terminal === 'IN' || terminal === 'NOT IN') {
					this.sqlStruct.range = []
				}
				if (terminal === ')' && this.sqlStruct.range) {
					var op = this.sqlStruct.conditions.pop()
					var name = this.sqlStruct.conditions.pop()
					if(name === 'NOT') {
						name = this.sqlStruct.conditions.pop()
						op = 'NOT IN'
					}
					this.sqlStruct.range.shift(); this.sqlStruct.range.pop() // remove parenthesis
					var command = `[${this.sqlStruct.range.join('')}].includes(${name})`
					if (op === 'NOT IN') {
						command = `!(${command})`
					}
					this.sqlStruct.conditions.push(command)
					this.sqlStruct.range = null
				}
				break;
			case 'Unary_operatorContext':
				if(child.getText() === 'NOT') {
					this.sqlStruct.not = true;
				}
				break;
			default:
				var expr = this.enterExpr_exprContext(child);
				if(expr) {
					if(this.sqlStruct.range) {
						this.sqlStruct.range.push(expr)
					} else if(this.sqlStruct.between) {
						this.sqlStruct.between.push(expr)
						if(this.sqlStruct.between.length == 2) {
							this.sqlStruct.conditions.pop()
							const column = this.sqlStruct.conditions.pop()
							//this.sqlStruct.conditions.push(`range(${column},${this.sqlStruct.between.join(',')})`)
							this.sqlStruct.conditions.push(`${column} >= ${this.sqlStruct.between[0]} && ${column} <= ${this.sqlStruct.between[1]}`)
							this.sqlStruct.between = null
						}
					} else {
						this.sqlStruct.conditions.push(expr)
					}
				}
				break;
			}
		})
	}

	// Enter a parse tree produced by SQLiteParser#expr.
	enterExpr(ctx) {
		if(this.sqlStruct && 
			this.sqlStruct.conditions.length == 0 && ctx.children.length > 2) {
			this.enterExpr_recursiveChildren(ctx.children)
		}
	}

	// Exit a parse tree produced by SQLiteParser#expr.
	exitExpr(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#raise_function.
	enterRaise_function(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#raise_function.
	exitRaise_function(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#literal_value.
	enterLiteral_value(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#literal_value.
	exitLiteral_value(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#insert_stmt.
	enterInsert_stmt(ctx) {
		this.sqlStruct = this.buildSqlStruct('insert');
		ctx.children.forEach(child => {
			switch(child.constructor.name) {
				case 'Table_nameContext':
					this.sqlStruct.table = child.getText()
					break;
				case 'TerminalNodeImpl':
					break;
				case 'Column_nameContext':
					this.sqlStruct.columns.push(child.getText())
					break;
				case 'ExprContext':
					this.sqlStruct.values.push(child.getText())
					break;
				default:
					break;
			}
		})
	}

	// Exit a parse tree produced by SQLiteParser#insert_stmt.
	exitInsert_stmt(ctx) {
		if(this.sqlStruct && this.sqlStruct.command === 'insert') {
			var values = []
			this.sqlStruct.columns.forEach(column => {
				values.push(`${column}: ${this.sqlStruct.values.shift()}`)
			})
			this.result.push(`insert('${this.sqlStruct.table}', {${values.join(', ')}})`)
			this.sqlStruct = null
		}
	}


	// Enter a parse tree produced by SQLiteParser#upsert_clause.
	enterUpsert_clause(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#upsert_clause.
	exitUpsert_clause(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#pragma_stmt.
	enterPragma_stmt(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#pragma_stmt.
	exitPragma_stmt(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#pragma_value.
	enterPragma_value(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#pragma_value.
	exitPragma_value(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#reindex_stmt.
	enterReindex_stmt(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#reindex_stmt.
	exitReindex_stmt(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#select_stmt.
	enterSelect_stmt(ctx) {
		this.sqlStruct = this.buildSqlStruct('select');
	}

	// Exit a parse tree produced by SQLiteParser#select_stmt.
	exitSelect_stmt(ctx) {
		if (this.sqlStruct) {
		var sql = [];
		if(this.sqlStruct.orderby) {
			var order = this.sqlStruct.orderby.pop()
			sql.push(`, orderBy('${this.sqlStruct.orderby.join(",")}', '${order.toLowerCase()}' `)
		}
		if(this.sqlStruct.table) {
			sql.push(", from('" + this.sqlStruct.table.join(","))
			if(this.sqlStruct.conditions.length > 0) {
				sql.push(`', { where: "${this.sqlStruct.conditions.join(' ')}"}`);
			} else {
				sql.push("'");
			}
			sql.push(")");
		}
		if(this.sqlStruct.orderby) {
			sql.push(")")
		}
		this.result.push(`select('${this.sqlStruct.columns.join(",")}'${sql.join('')})`);
		this.sqlStruct = null;
		}
	}


	// Enter a parse tree produced by SQLiteParser#join_clause.
	enterJoin_clause(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#join_clause.
	exitJoin_clause(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#select_core.
	enterSelect_core(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#select_core.
	exitSelect_core(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#factored_select_stmt.
	enterFactored_select_stmt(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#factored_select_stmt.
	exitFactored_select_stmt(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#simple_select_stmt.
	enterSimple_select_stmt(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#simple_select_stmt.
	exitSimple_select_stmt(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#compound_select_stmt.
	enterCompound_select_stmt(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#compound_select_stmt.
	exitCompound_select_stmt(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#table_or_subquery.
	enterTable_or_subquery(ctx) {
		if(this.sqlStruct) {
			this.sqlStruct.table.push(ctx.getText())
		}
	}

	// Exit a parse tree produced by SQLiteParser#table_or_subquery.
	exitTable_or_subquery(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#result_column.
	enterResult_column(ctx) {
		if(this.sqlStruct) {
			this.sqlStruct.columns.push(this.escape(ctx.getText()));
		}
	}

	// Exit a parse tree produced by SQLiteParser#result_column.
	exitResult_column(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#join_operator.
	enterJoin_operator(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#join_operator.
	exitJoin_operator(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#join_constraint.
	enterJoin_constraint(ctx) {
  }

	// Exit a parse tree produced by SQLiteParser#join_constraint.
	exitJoin_constraint(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#compound_operator.
	enterCompound_operator(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#compound_operator.
	exitCompound_operator(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#update_stmt.
	enterUpdate_stmt(ctx) {
		this.sqlStruct = this.buildSqlStruct('update')
		var lastTerminal = null
		ctx.children.forEach(child => {
			switch(child.constructor.name) {
				case 'Qualified_table_nameContext':
					this.sqlStruct.table = child.getText()
					break;
				case 'Column_nameContext':
					this.sqlStruct.columns.push(child.getText())
					break;
				case 'TerminalNodeImpl':
					if(child.getText() === '=')	{
						lastTerminal = true
					}
					break;
				case 'ExprContext':
					if(lastTerminal) {
						this.sqlStruct.values.push(child.getText())
						lastTerminal = false
					} else {
						this.enterExpr_recursiveChildren(child.children)
					}
					break;
				}
			})
	}

	// Exit a parse tree produced by SQLiteParser#update_stmt.
	exitUpdate_stmt(ctx) {
		if(this.sqlStruct && this.sqlStruct.command === 'update') {
			var sql = []
			sql.push(`updateFrom('${this.sqlStruct.table}', {`);
			var values = []
			this.sqlStruct.columns.forEach((column, index) => {
				values.push(`${column}: ${this.sqlStruct.values[index]}`)
			})
			sql.push(`${values.join(',')}}`);
			if(this.sqlStruct.conditions && this.sqlStruct.conditions.length > 0) {
				sql.push(`, { where: "${this.sqlStruct.conditions.join(' ')}"})`);
			} else {
				sql.push(`)`);
			}
			this.result.push(sql.join(''))
			this.sqlStruct = null;
		}
	}


	// Enter a parse tree produced by SQLiteParser#column_name_list.
	enterColumn_name_list(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#column_name_list.
	exitColumn_name_list(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#update_stmt_limited.
	enterUpdate_stmt_limited(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#update_stmt_limited.
	exitUpdate_stmt_limited(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#qualified_table_name.
	enterQualified_table_name(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#qualified_table_name.
	exitQualified_table_name(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#vacuum_stmt.
	enterVacuum_stmt(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#vacuum_stmt.
	exitVacuum_stmt(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#filter_clause.
	enterFilter_clause(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#filter_clause.
	exitFilter_clause(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#window_defn.
	enterWindow_defn(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#window_defn.
	exitWindow_defn(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#over_clause.
	enterOver_clause(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#over_clause.
	exitOver_clause(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#frame_spec.
	enterFrame_spec(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#frame_spec.
	exitFrame_spec(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#frame_clause.
	enterFrame_clause(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#frame_clause.
	exitFrame_clause(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#simple_function_invocation.
	enterSimple_function_invocation(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#simple_function_invocation.
	exitSimple_function_invocation(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#aggregate_function_invocation.
	enterAggregate_function_invocation(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#aggregate_function_invocation.
	exitAggregate_function_invocation(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#window_function_invocation.
	enterWindow_function_invocation(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#window_function_invocation.
	exitWindow_function_invocation(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#common_table_stmt.
	enterCommon_table_stmt(ctx) {
		console.log(ctx.getText());
	}

	// Exit a parse tree produced by SQLiteParser#common_table_stmt.
	exitCommon_table_stmt(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#order_by_stmt.
	enterOrder_by_stmt(ctx) {
		this.sqlStruct.orderby = []
		ctx.children.forEach(child => {
			if(child.constructor.name === 'Ordering_termContext') {
				child.children.forEach(child => {
					this.sqlStruct.orderby.push(child.getText());
				})
			}
		})
		var lastElem = this.sqlStruct.orderby[this.sqlStruct.orderby.length - 1];
		if(lastElem !== 'ASC' && lastElem !== 'DESC') {
			this.sqlStruct.orderby.push('ASC')
		}
	}

	// Exit a parse tree produced by SQLiteParser#order_by_stmt.
	exitOrder_by_stmt(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#limit_stmt.
	enterLimit_stmt(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#limit_stmt.
	exitLimit_stmt(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#ordering_term.
	enterOrdering_term(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#ordering_term.
	exitOrdering_term(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#asc_desc.
	enterAsc_desc(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#asc_desc.
	exitAsc_desc(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#frame_left.
	enterFrame_left(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#frame_left.
	exitFrame_left(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#frame_right.
	enterFrame_right(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#frame_right.
	exitFrame_right(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#frame_single.
	enterFrame_single(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#frame_single.
	exitFrame_single(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#window_function.
	enterWindow_function(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#window_function.
	exitWindow_function(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#of_OF_fset.
	enterOf_OF_fset(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#of_OF_fset.
	exitOf_OF_fset(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#default_DEFAULT__value.
	enterDefault_DEFAULT__value(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#default_DEFAULT__value.
	exitDefault_DEFAULT__value(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#partition_by.
	enterPartition_by(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#partition_by.
	exitPartition_by(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#order_by_expr.
	enterOrder_by_expr(ctx) {
		console.log("enterOrder_by_expr");
	}

	// Exit a parse tree produced by SQLiteParser#order_by_expr.
	exitOrder_by_expr(ctx) {
		console.log("exitOrder_by_expr");
	}

	// Enter a parse tree produced by SQLiteParser#order_by_expr_asc_desc.
	enterOrder_by_expr_asc_desc(ctx) {
		console.log("enterOrder_by_expr_asc_desc");
	}

	// Exit a parse tree produced by SQLiteParser#order_by_expr_asc_desc.
	exitOrder_by_expr_asc_desc(ctx) {
		console.log("exitOrder_by_expr_asc_desc");
	}


	// Enter a parse tree produced by SQLiteParser#expr_asc_desc.
	enterExpr_asc_desc(ctx) {
		console.log("enterExpr_asc_desc");
	}

	// Exit a parse tree produced by SQLiteParser#expr_asc_desc.
	exitExpr_asc_desc(ctx) {
		console.log("exitExpr_asc_desc");
	}


	// Enter a parse tree produced by SQLiteParser#initial_select.
	enterInitial_select(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#initial_select.
	exitInitial_select(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#recursive__select.
	enterRecursive__select(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#recursive__select.
	exitRecursive__select(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#unary_operator.
	enterUnary_operator(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#unary_operator.
	exitUnary_operator(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#error_message.
	enterError_message(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#error_message.
	exitError_message(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#module_argument.
	enterModule_argument(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#module_argument.
	exitModule_argument(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#column_alias.
	enterColumn_alias(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#column_alias.
	exitColumn_alias(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#keyword.
	enterKeyword(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#keyword.
	exitKeyword(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#name.
	enterName(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#name.
	exitName(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#function_name.
	enterFunction_name(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#function_name.
	exitFunction_name(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#schema_name.
	enterSchema_name(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#schema_name.
	exitSchema_name(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#table_name.
	enterTable_name(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#table_name.
	exitTable_name(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#table_or_index_name.
	enterTable_or_index_name(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#table_or_index_name.
	exitTable_or_index_name(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#new_table_name.
	enterNew_table_name(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#new_table_name.
	exitNew_table_name(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#column_name.
	enterColumn_name(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#column_name.
	exitColumn_name(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#collation_name.
	enterCollation_name(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#collation_name.
	exitCollation_name(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#foreign_table.
	enterForeign_table(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#foreign_table.
	exitForeign_table(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#index_name.
	enterIndex_name(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#index_name.
	exitIndex_name(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#trigger_name.
	enterTrigger_name(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#trigger_name.
	exitTrigger_name(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#view_name.
	enterView_name(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#view_name.
	exitView_name(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#module_name.
	enterModule_name(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#module_name.
	exitModule_name(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#pragma_name.
	enterPragma_name(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#pragma_name.
	exitPragma_name(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#savepoint_name.
	enterSavepoint_name(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#savepoint_name.
	exitSavepoint_name(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#table_alias.
	enterTable_alias(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#table_alias.
	exitTable_alias(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#transaction_name.
	enterTransaction_name(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#transaction_name.
	exitTransaction_name(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#window_name.
	enterWindow_name(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#window_name.
	exitWindow_name(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#alias.
	enterAlias(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#alias.
	exitAlias(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#filename.
	enterFilename(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#filename.
	exitFilename(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#base_window_name.
	enterBase_window_name(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#base_window_name.
	exitBase_window_name(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#simple_func.
	enterSimple_func(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#simple_func.
	exitSimple_func(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#aggregate_func.
	enterAggregate_func(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#aggregate_func.
	exitAggregate_func(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#table_function_name.
	enterTable_function_name(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#table_function_name.
	exitTable_function_name(ctx) {
	}


	// Enter a parse tree produced by SQLiteParser#any_name.
	enterAny_name(ctx) {
	}

	// Exit a parse tree produced by SQLiteParser#any_name.
	exitAny_name(ctx) {
  }

}