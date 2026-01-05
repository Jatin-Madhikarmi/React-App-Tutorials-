function Message(){
    const name=""
    const age="20"
    if(name)
        return <h1>Hello {name} your age is {age} </h1>
    return <h1>Hello World</h1>
}

export default Message