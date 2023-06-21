export default function ContainerLayout({ children }) {
    return (
      <div class="w-full pb-10 drop-shadow-lg pt-10 min-h-min">
        <div class="[&>h1]:text-center bg-white border-solid border h-max sm:rounded-none sm:border-none lg:rounded-lg m-auto min-[100px]:w-full lg:w-max pl-12 pr-12">
            {children}
        </div>
      </div> 
    )
  }