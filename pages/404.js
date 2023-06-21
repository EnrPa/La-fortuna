import ContainerLayout from "../components/containerLayout";
import Link from 'next/link';

export default function Custom404() {
    return (
        <ContainerLayout>
            <h1 class="text-red-500 text-center">404: Not Found</h1>
            <p>Lo siento, lo que estás buscando no se encuentra aquí.</p>
            <p>¡Esperamos que puedas encontrar lo que buscas pronto!</p>
            <div class="m-auto p-6 w-full flex justify-center">
                <Link href="/" class="rounded-lg bg-yellow-500 p-2 text-center">
                    Has click aquí para volver al menú principal
                </Link>
            </div>

        </ContainerLayout>
    )
}