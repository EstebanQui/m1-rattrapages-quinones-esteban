import React from "react";

const LeaveForm = () => {
    return (
        <div id="request_vacation" className="flex flex-col items-center justify-center w-full mt-8">
            <h2 className="text-3xl font-bold">Request Vacations</h2>
            <form className="flex flex-col items-center justify-center gap-3 mt-6 border-t border-x-blue-50 w-full">
                <label htmlFor="leaveType" className="text-xl font-semibold mt-6">Leave Type</label>
                <select id="leaveType" name="leaveType" className=" w-3/5 p-2 mt-2 text-blue-950">
                    <option value="rtt">RTT</option>
                    <option value="cp">CP</option>
                    <option value="ce">Congé Exceptionnel</option>
                </select>
                <div className=" w-3/5 sm:grid sm:grid-cols-2 gap-6">
                    <div className="flex flex-col items-center justify-center w-full">
                        <label htmlFor="startDate" className="text-xl font-semibold mt-4">Start Date</label>
                        <input type="date" id="startDate" name="startDate" className="text-blue-950 w-full p-2 mt-2" />
                    </div>
                    <div className="flex flex-col items-center justify-center w-full">
                        <label htmlFor="endDate" className="text-xl font-semibold mt-4">End Date</label>
                        <input type="date" id="endDate" name="endDate" className="text-blue-950 w-full p-2 mt-2" />
                    </div>
                </div>
                <label htmlFor="comments" className="text-xl font-semibold mt-4">Comments</label>
                <textarea id="comments" name="comments" className="text-blue-950  w-3/5 p-2 mt-2 h-32"></textarea>
                <button type="submit" className="focuas:outline bg-green-500 text-white hover:bg-green-600 focus:ring-green-300  font-semibold rounded-lg p-2 mt-4  w-2/5">Submit</button>
            </form>
        </div>
    );
}

export default LeaveForm;