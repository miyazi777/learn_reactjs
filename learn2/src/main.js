import React from 'react';
import ReactDOM from 'react-dom';

// list2-13, list2-14,list2-15
var Evaluator = React.createClass({
    componentWillMount: function() {
        console.log('component will mount');
    },
    componentDidMount: function() {
        console.log('component did mount');
    },
    componentWillReceiveProps: function(nextProps) {
        console.log('component will receive props:', nextProps);
    },
    shouldComponentUpdate: function(nextProps, nextState) {
        console.log('should component update:', nextProps, nextState);
        return true;
    },
    componentWillUpdate: function(nextProps, nextState) {
        console.log('component will update:', nextProps, nextState);
    },
    componentDidUpdate: function(prevProps, prevState) {
        console.log('component did update:', prevProps, prevState);
    },
    componentWillUnmount: function() {
        console.log('component will unmount');
    },
    // 初期化処理
    getInitialState: function() {
        return {
            expression: ''
        };
    },
    // 再計算処理
    reCalcValue: function(e) {
        if (e.key === 'Enter')
            this.setState({
                expression: e.target.value
            });
    },
    // 描画処理
    render: function() {
        return React.DOM.div(
            null,
            React.DOM.input({
                type: 'text',
                onKeyPress: this.reCalcValue
            }),
            React.DOM.h2(null, eval(this.state.expression))
        );
    }
});

ReactDOM.render(
    React.createElement(
        Evaluator
    ),
    document.getElementById('app')
);

// list2-12
//var MultiElement = React.createClass({
//    render: function() {
//        return React.DOM.div(null,
//            React.DOM.h2(null, 'First Element'),
//            React.DOM.h2(null, 'Second Eelement'),
//            React.DOM.h2(null, 'Third Eelement'),
//        );
//    }
//});
//
//ReactDOM.render(
//    React.createElement(MultiElement),
//    document.getElementById('app')
//);


// list2-9, list2-10
//var Evaluator = React.createClass({
//    render: function() {
//        return React.DOM.h2(null, eval(this.props.text));
//    }
//});
//
//ReactDOM.render(
//    React.createElement(
//        Evaluator,
//        {
//            text: '5 / 4'
//        }
//    ),
//    document.getElementById('app')
//);


// list2-7, list2-8
//var HelloWorld = React.createClass({
//    render: function() {
//        return React.DOM.h2(null, 'Hello, ' + this.props.name + ' World!');
//    }
//});
//
//ReactDOM.render(
//    React.createElement(
//        HelloWorld,
//        {
//            name: 'Reactxxx'
//        }
//    ),
//    document.getElementById('app')
//);


// list2-5, list2-6
//var HelloWorld = React.createClass({
//    render: function() {
//        return React.DOM.h2(null, 'Hello, React World!');
//    }
//});
//
//ReactDOM.render(
//    React.createElement(HelloWorld),
//    document.getElementById('app')
//);

// list2-2
//ReactDOM.render(
//    React.DOM.h2(null, 'Hello, React World!'),
//    document.getElementById('app')
//);


// list2-3
//ReactDOM.render(
//    React.createElement('h2', null, 'Hello, React World!'),
//    document.getElementById('app')
//);


// list2-4
//ReactDOM.render(
//    React.DOM.h2({
//        style:{
//            fontStyle: 'oblique',
//            fontFamily: 'Arial',
//            color: 'green'
//        }}
//        , 'Hello, React World!'),
//    document.getElementById('app')
//);


