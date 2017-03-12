# Reactの基本的なメソッド

## React.createClass
Reactのコンポーネントを定義するクラス

## React.createElement
Reactのコンポーネントを元に表示用の要素を作成するクラス

## ReactDom.render
指定されたコンポーネントとプロパティを元に描画をおこなう

# ライフサイクルメソッド
React内のライフサイクル管理機構内から呼び出されるメソッド。

## componentWillMount
コンポーネントが描画される直前に１回、呼び出される

## componentDidMount
コンポーネントが描画された直後に１回、呼び出される

## componentWillReciveProps
propsに新しいプロパティがセットされる毎に呼び出される。nextPropsに新しくセットされる予定のプロパティが渡されてくる。

## shouldComponentUpdate
新しいプロパティ・ステートを受け取る直前に呼び出される。nextPropsとnextStateには更新後のプロパティとステートがそれぞれセットされる。
falseを返却すると更新が行われない。

## componentWillUpdate
コンポーネントが更新される直前に呼びされる。ただし、shouldComponentUpdateでfalseを返却した場合には呼び出されない。

## componentDidUpdate
コンポーネントが更新された直後に呼び出される。prevPropsとprevStateには更新前のプロパティとステートが格納されている。

## componentWillUnmount
コンポーネントが削除される、ページが閉じられる直前に呼び出される。

