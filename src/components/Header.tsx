import snare from 'public/snare.png'
import Image from 'next/image'

const Header = () => (
    <div className=" p-8 bg-stone-200 flex place-content-center">
        <div className="w-screen">
            <div className="flex flex-col md:flex-row" >
                <p className="md:text-4xl text-4xl text-center md:text-left font-neutral">Duncan Moore</p>
                <div className="md:inline flex justify-center">
                    <Image src={snare} alt="Snare drum icon" />
                </div>

            </div>
            <p className="hidden sm:flex md:text-3xl text-2xl text-center md:text-left font-neutral md:indent-8">Drummer | Educator</p>
            <p className="md:text-3xl text-2xl text-center sm:hidden font-neutral md:indent-8">Drummer Educator</p>

        </div>
    </div>
)

export default Header