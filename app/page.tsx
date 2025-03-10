import Header from "@/app/components/header";
import Post from "@/app/components/post";


export default function Home() {
    return (
        <div className={`bg-gray-100`}>
            <Header />

            <div className={`w-80 mx-auto mt-24 flex flex-col justify-center`}>
                <div className={`mt-3`}>
                    <Post id={1} name={'Primera donacion'} description={'donacion realizada #1'} image={''} />
                </div>
                <div className={`mt-3`}>
                    <Post id={2} name={'Segunda donacion'} description={'donacion realizada #2'} image={''} />
                </div>
                <div className={`mt-3`}>
                    <Post id={3} name={'Tercera donacion'} description={'donacion realizada #3'} image={''} />
                </div>
                <div className={`mt-3`}>
                    <Post id={4} name={'Cuarta donacion'} description={'donacion realizada #4'} image={''} />
                </div>
                <div className={`mt-3`}>
                    <Post id={5} name={'Quinta donacion'} description={'donacion realizada #5'} image={''} />
                </div>

            </div>
        </div>
  );
}
