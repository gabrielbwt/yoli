"use client"

import Image from 'next/image';
import imageTeste from '../../assets/images/teste.jpg'
import logoSVG from '../../assets/svg/logo_full_yoli.svg'
import Input from '../input/Input';
import { useGetLogin } from '@/services/hooks/auth';
import { useAuth } from '@/store/auth';
import { useRouter } from 'next/navigation';

export default function LoginApp() {

    const { setAuthToken } = useAuth()
    const router = useRouter();

    const body = {
        login: 'gabrielbwt',
        password: '123456'
    }

    const { mutate, isPending } = useGetLogin(body)

    function handleLogin(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()

        mutate(void 0, {
            onSuccess: (data) => {
                const { access_token } = data
                setAuthToken(access_token)
                router.push('/home')
            }
        })
    }

    return (
        < section className="flex lg:h-screen lg:items-center max-lg:flex-col" >

            <div className="max-lg:h-[15rem] w-full lg:h-full lg:w-fit flex items-center justify-center bg-fuchsia-100">

                <Image
                    alt=""
                    src={imageTeste}
                    width={500}
                    height={500}
                    className="h-full w-auto object-cover max-lg:w-[13rem]"
                    style={{ width: '100vw' }} />
            </div>

            <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:min-w-[50vw] lg:px-8 lg:py-24">
                <div className='w-fit mb-2 mx-auto'>
                    <Image priority src={logoSVG} alt="Logo da Yoli" width={500} height={500} style={{ width: '11rem', height: 'auto', margin: '0 auto' }} />
                </div>
                <div className="mx-auto max-w-lg text-center">

                    <h1 className="text-2xl font-bold sm:text-3xl">Bem-vindo(a) de volta!</h1>
                    <p className="mt-4 text-gray-500">
                        Simplifique seu atendimento e concentre-se no que importa: o cuidado com seus pacientes.
                    </p>
                </div>

                <form className="mx-auto mb-0 mt-8 max-w-md space-y-4">

                    <div className="col-span-6">
                        <Input id="email" placeholder="Login" />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <Input id="password" placeholder='Senha' type="password" />
                    </div>

                    <div className="flex items-center justify-end">
                        {/* <p className="text-sm text-gray-500">
                            Não tem cadastro?
                            <Link href='/cadastro' className="underline ml-[0.5rem]"><span>Cadastrar</span></Link>
                        </p> */}

                        <button
                            onClick={handleLogin}
                            className="flex items-center justify-center font-bold rounded-lg bg-primary-main px-5 h-9 text-sm font-sans text-white"
                        >
                            {isPending ? 'Carregando' : 'Login'}
                        </button>
                    </div>
                </form>
            </div>


        </section >
    )
}