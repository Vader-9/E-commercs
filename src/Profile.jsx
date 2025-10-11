
function Profile(){

    return(
        <div className="flex justify-center items-center mt-[10%] mb-[10%] mx-[30%] p-[50px] w-[500px] border text-center">
            <div>
                <h1>Login______</h1>
                <div className="flex flex-col">
                    <input type="text" name="" id=""  className="border m-[20px] p-[10px] w-[400px]"/>
                    <input type="text" name="" id=""  className="border m-[20px] p-[10px] w-[400px]"/>   
                </div>
                <div className="flex justify-center gap-[100px] m-[10px]">
                    <p>Forgot your password?</p>
                    <p>Create account</p>
                </div>
                <button>Sign in</button>
            </div>
        </div>
    )
}

export default Profile