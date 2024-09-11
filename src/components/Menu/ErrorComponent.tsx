
import toritoScaredVideo from '../../images/ToritoScared.mp4';

export const ErrorComponent = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
            <h1 className="bg-black text-white text-center text-[48px] py-6 px-4 font-extrabold uppercase tracking-widest shadow-lg border-4 border-yellow-500 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 bg-clip-text text-transparent">
                TEO Y TORITO SON CACORRITOS
            </h1>
            <video 
                className="w-full bg-black" 
                src={toritoScaredVideo}
                controls
            ></video>
            </main>
        </div>
    );
}
