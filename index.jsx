// 将createElement方法替换成h方法
/* @jsx h */

var profile = <div>
    <img src="avatar.png" className="profile" />
    <h3> {[user.firstName, user.lastName].join(' ')} </h3>
</div>;

class Input extends Component {
    render() {
        return (
            <div>
                <input value={this.state.title} onChange={this.changeHandler} />
                <button onClick={this.clickHandler.bind(this)}>submit</button>
            </div>
        )
    }
}