import useAxiosOnMount from '../hooks/useAxiosOnMount'
import ErrorMessage from './ErrorMessage'

const HookDemo = (props)=>{
//  const {data, loading, error} = useAxiosOnMount('https://reqres.in/ap/users?delay=3') 
 const {data, loading, error} = useAxiosOnMount('https://reqres.in/ap/users?delay=3') 

 const renderData = () => {
    return data.map( d => <pre>{JSON.stringify(d, null, 1)}</pre>)
 }

 if(loading) return <p>loading</p>
 if(error) return <ErrorMessage fullError error={error} />
 return (
     <div>
       <h1>HookDemo with custom hook</h1>
       {renderData()}
     </div>
 )
}

export default HookDemo