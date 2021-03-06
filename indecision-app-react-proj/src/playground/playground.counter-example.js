"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
	_inherits(IndecisionApp, _React$Component);

	function IndecisionApp(props) {
		_classCallCheck(this, IndecisionApp);

		var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

		_this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
		_this.handlePick = _this.handlePick.bind(_this);
		_this.handleAddOption = _this.handleAddOption.bind(_this);
		_this.state = {
			//options: [],
			options: props.options,
			title: "Hello React",
			subtitle: "React Sub"
		};
		return _this;
	}

	_createClass(IndecisionApp, [{
		key: "handlePick",
		value: function handlePick() {
			var randomNum = Math.floor(Math.random() * this.state.options.length);
			var option = this.state.options[randomNum];
			alert(option);
		}
	}, {
		key: "handleDeleteOptions",
		value: function handleDeleteOptions() {
			this.setState(function () {
				return {
					options: []
				};
			});
		}
	}, {
		key: "handleAddOption",
		value: function handleAddOption(newOption) {
			if (!newOption) {
				return 'Enter valid value to add item';
			} else if (this.state.options.indexOf(newOption) > -1) {
				return 'This option already exists';
			}
			this.setState(function (prevState) {
				return {
					options: prevState.options.concat([newOption])
				};
			});
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(Header, { title: this.state.title, subtitle: this.state.subtitle }),
				React.createElement(Action, { hasOptions: this.state.options.length > 0, handlePick: this.handlePick }),
				React.createElement(Options, {
					options: this.state.options,
					handleDeleteOptions: this.handleDeleteOptions }),
				React.createElement(AddOption, { handleAddOption: this.handleAddOption })
			);
		}
	}]);

	return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
	options: []
};

var Header = function Header(props) {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"h1",
			null,
			" ",
			props.title,
			" "
		),
		props.subtitle && React.createElement(
			"h2",
			null,
			" ",
			props.subtitle,
			" "
		)
	);
};

Header.defaultsProps = {
	title: 'Default Title'
};

// class Header extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<h1> {this.props.title} </h1>
// 				<h2> {this.props.subtitle} </h2>
// 			</div>
// 		);
// 	} 
// }

// const Action = (props) => {
// 	return (
// 		<div>
// 			<button
// 				onClick={props.handlePick}
// 				disabled={!props.hasOptions}
// 			>
// 				What Should I Do?
// 				</button>
// 		</div>
// 	);
// }

var Action = function (_React$Component2) {
	_inherits(Action, _React$Component2);

	function Action() {
		_classCallCheck(this, Action);

		return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
	}

	_createClass(Action, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"button",
					{
						onClick: this.props.handlePick,
						disabled: !this.props.hasOptions
					},
					"What Should I Do?"
				)
			);
		}
	}]);

	return Action;
}(React.Component);

var Options = function (_React$Component3) {
	_inherits(Options, _React$Component3);

	function Options() {
		_classCallCheck(this, Options);

		return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
	}

	_createClass(Options, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"button",
					{ onClick: this.props.handleDeleteOptions },
					"Remove All"
				),
				React.createElement(
					"p",
					null,
					" List Options: "
				),
				this.props.options.map(function (option) {
					return React.createElement(Option, { key: option, optionText: option });
				})
			);
		}
	}]);

	return Options;
}(React.Component);

var Option = function (_React$Component4) {
	_inherits(Option, _React$Component4);

	function Option(props) {
		_classCallCheck(this, Option);

		return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));
	}

	_createClass(Option, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				"Option: ",
				this.props.optionText
			);
		}
	}]);

	return Option;
}(React.Component);

var AddOption = function (_React$Component5) {
	_inherits(AddOption, _React$Component5);

	function AddOption(props) {
		_classCallCheck(this, AddOption);

		var _this5 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

		_this5.handleSubmitOption = _this5.handleSubmitOption.bind(_this5);
		_this5.state = {
			error: undefined
		};
		return _this5;
	}

	_createClass(AddOption, [{
		key: "handleSubmitOption",
		value: function handleSubmitOption(e) {
			e.preventDefault(); //prevent for the form to refresh...
			var option = e.target.elements.option.value;

			var error = this.props.handleAddOption(option.trim());

			this.setState(function () {
				return {
					//error: error
					error: error //same as above
				};
			});
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				this.state.error && React.createElement(
					"p",
					null,
					"Error=> ",
					this.state.error
				),
				React.createElement("br", null),
				React.createElement(
					"form",
					{ onSubmit: this.handleSubmitOption },
					"Add New Option:",
					React.createElement("br", null),
					React.createElement("input", { type: "text", name: "option" }),
					React.createElement(
						"button",
						null,
						" Add Option"
					),
					" ",
					React.createElement("br", null)
				)
			);
		}
	}]);

	return AddOption;
}(React.Component);

//Stateless Functional Component only use for display no state work


var User = function User(props) {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"p",
			null,
			"Name: ",
			props.name
		),
		React.createElement(
			"p",
			null,
			"Age:  ",
			props.age
		)
	);
};

//ReactDOM.render( jsx , document.getElementById('app'));
ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
//ReactDOM.render(<User name='JMC' age='58'/>, document.getElementById('app'));
