export function Footer() {
    return (
      <>
        <div class="z-10 absolute bg-yellow-500 h-48 bottom fixed grid backdrop-blur-lg w-full h-42 m-auto justify-center">
          <h3 class="text-center text-white p-2 w-auto text-2xl font-light flex flex-wrap justify-center"> <span class="font-bold pr-2 ">Supermercado </span> La Fortuna</h3>
          <ul class="text-black-500 underline justify-center grid grid-rows-2 grid-flow-col gap-4 w-max gap-10">
            <li><a href="#" >Tienda</a></li>
            <li><a href="#">Tienda</a></li>
            <li><a href="#">Tienda</a></li>
            <li><a href="#">Tienda</a></li>
            <li><a href="https://thispersondoesnotexist.com/">Ver cara del CEO de la empresa</a></li>
          </ul>
        </div>
      </>
    )
}