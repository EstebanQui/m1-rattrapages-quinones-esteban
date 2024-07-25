import React from "react";

const ListVacations = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-center">Vacations</h1>
            <div className="flex flex-col items-center justify-center mt-4 w-1/2"> 
                <div className="flex flex-col items-center justify-center gap-8 w-full">
                    <div className="flex flex-row items-center justify-center w-full">
                        <div className="flex flex-col items-center justify-center w-1/2">
                        <h2 className="text-xl font-semibold text-center">Vacation 1</h2>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet tortor nec nunc ultricies ultricies. Ut in semper purus. Nullam nec semper neque. Nulla facilisi. Nullam nec semper neque. Nulla facilisi.</p>
                        </div>
                        <div className="flex flex-col items-center justify-center w-1/2">
                        <img src="https://images.unsplash.com/photo-1536599018102-3d9f03fd6d8e" alt="Vacation 1" className="w-1/2 h-auto rounded-lg" />
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center w-full">
                        <div className="flex flex-col items-center justify-center w-1/2">
                        <h2 className="text-xl font-semibold text-center">Vacation 2</h2>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet tortor nec nunc ultricies ultricies. Ut in semper purus. Nullam nec semper neque. Nulla facilisi. Nullam nec semper neque. Nulla facilisi.</p>
                        </div>
                        <div className="flex flex-col items-center justify-center w-1/2">
                        <img src="https://images.unsplash.com/photo-1536599018102-3d9f03fd6d8e" alt="Vacation 2" className="w-1/2 h-auto rounded-lg" />
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center w-full">
                        <div className="flex flex-col items-center justify-center w-1/2">
                        <h2 className="text-xl font-semibold text-center">Vacation 3</h2>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet tortor nec nunc ultricies ultricies. Ut in semper purus. Nullam nec semper neque. Nulla facilisi. Nullam nec semper neque. Nulla facilisi.</p>
                        </div>
                        <div className="flex flex-col items-center justify-center w-1/2">
                        <img src="https://images.unsplash.com/photo-1536599018102-3d9f03fd6d8e" alt="Vacation 3" className="w-1/2 h-auto rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListVacations;