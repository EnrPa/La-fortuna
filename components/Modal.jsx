export function Modal({ children }) {
    return (
        <div class="fixed left-1/2 -translate-x-1/2 m-auto z-10 h-full w-96 bg-red-100 flex justify-center">
            {children}
        </div>
    )
}