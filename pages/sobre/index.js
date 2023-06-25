import ContainerLayout from "../../components/containerLayout";

export default function Sobre() {
    return (
        <ContainerLayout>
            <section class="margin-auto w-full text-center p-10">
                <h1 class="text-xl">Proyecto de Taller de Programación</h1>
                <p>Integrantes:</p>
                <ul>
                    <li>Kevin K.</li>
                    <li>Joaquín C.</li>
                    <li>Pablo E.</li>
                </ul>
            </section>
            <article>
                <h1>Cosas que faltan hacer</h1>
                <ul class="list-disc">
                    <li>Añadir Dark Mode</li>
                    <li>Añadir botón que permita añadir nueva sección</li>
                    <li>Añadir botón que permita añadir nuevo empleado</li>
                    <li>Añadir botón que permita editar información de sección</li>
                    <li>Añadir productos de proveedor a proveedor</li>
                    <li>Decorar [id] de empleados</li>
                    <li>Decorar registrar.js de empleados</li>
                    <li>Añadir productos de secciones</li>
                    <li>Permitir eliminación de productos</li>
                    <li>Añadir manejo de ventas</li>
                    <ul class="list-disc pl-6">
                        <li>Quizá otra aplicación dentro que permita sus ventas</li>
                        <li>Programa simple que conecte en la API del programa</li>
                        <li>Se necesitaría un tema de Request y que actualize BBDD</li>
                    </ul>
                    <li>Añadir información a Dashboard con gráficos y así</li>
                </ul>
            </article>
        </ContainerLayout>
    )
}