import React,{Component} from 'react';

export default (OldComponent,styles)=>{
  return class newComponent extends Component{
    componentWillMount() {
      this.props.staticContext && this.props.staticContext.css.push(styles._getCss());
    }
    render(){
      return <OldComponent {...this.props} />
    }
  }
}