import React from "react";

const LeaveSummary = () => {

    const totalLeave = 24;
    const leaveDays = [ 7, 2, 10 ];
    const totalLeft = totalLeave - leaveDays.length;

    return (
        <div id="vacation_summary" className="flex flex-col items-center justify-center mt-8 w-full">
            <h2 className="text-3xl font-bold">Vacation summary</h2>
            <div className="mt-6 border-t border-x-blue-50 flex flex-col items-center justify-center  w-full">
                <div className="flex flex-col items-center justify-center gap-8 w-full">
                    <div className="flex flex-row items-center justify-center gap-8 mt-6 w-full">
                        <div className="flex flex-col items-center justify-center gap-4">
                            <h3 className="text-xl font-semibold text-center">Total leave</h3>
                            <p className="text-center">{totalLeave}</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-4">
                            <h3 className="text-xl font-semibold text-center">Total left</h3>
                            <p className="text-center">{totalLeft}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeaveSummary;