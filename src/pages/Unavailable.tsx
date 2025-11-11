function Unavailable() { 
    return (

          <div className="w-full">
            <div className="flex h-full w-full max-w-5xl flex-col justify-center items-center mx-auto">
                 <h1 className="text-4xl font-bold mb-4 text-gray-800">Page Unavailable</h1>
                <p className="text-gray-600 mb-6">Sorry, this page is currently unavailable or does not exist.</p>
                <a href="/" className="rounded-full px-6 bg-(--color-darkshade1) py-2 text-(--color-background) transition hover:opacity-80">
                        Go Back
                </a>
            </div>
        </div>

    );
}

export default Unavailable;
