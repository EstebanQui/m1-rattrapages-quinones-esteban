import React, {useState} from "react";

const ListVacations = () => {
    const [vacations, setVacations] = useState ([
        { 
            id: 1, 
            type: "Congé Exceptionnel", 
            duration: "7 days", 
            start_date: "2022-10-01",
            end_date: "2022-10-08",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet tortor nec nunc ultricies ultricies. Ut in semper purus. Nullam nec semper neque. Nulla facilisi. Nullam nec semper neque. Nulla facilisi.", 
            status: "Refused" 
        }, 
        { 
            id: 2, 
            type: "CP", 
            duration: "2 days", 
            start_date: "2022-11-01",
            end_date: "2022-11-03",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet tortor nec nunc ultricies ultricies. Ut in semper purus. Nullam nec semper neque. Nulla facilisi. Nullam nec semper neque. Nulla facilisi.", 
            status: "Validated" 
        }, 
        { 
            id: 3, 
            type: "RTT", 
            duration: "10 days", 
            start_date: "2022-12-01",
            end_date: "2022-12-11",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet tortor nec nunc ultricies ultricies. Ut in semper purus. Nullam nec semper neque. Nulla facilisi. Nullam nec semper neque. Nulla facilisi.", 
            status: "Requested" 
        }
    ]);

    const [selectedVacation, setSelectedVacation] = React.useState(null);
    const [newStatus, setNewStatus] = React.useState("");

    const gestionVacation = (status) => {
        switch (status) {
            case "Requested":
                return "bg-yellow-500 text-white font-semibold rounded-lg p-2 mt-4";
            case "Validated":
                return "bg-green-500 text-white font-semibold rounded-lg p-2 mt-4";
            case "Refused":
                return "bg-red-500 text-white font-semibold rounded-lg p-2 mt-4";
            case "Canceled":
                return "bg-gray-500 text-white font-semibold rounded-lg p-2 mt-4";
            default:
                return "Request";
        }
    }

    const modifierVacation = (id) => {
        const modifeVacation = vacations.map((vacation) => {
            if (vacation.id === id && newStatus) {
                vacation.status = newStatus;
            }
            return vacation;
        });
        setVacations(modifeVacation);
        setSelectedVacation(null);
        setNewStatus("");
    }

    const cancelVacation = (id) => {
        const cancelVacation = vacations.map((vacation) => {
            if (vacation.id === id) {
                vacation.status = "Canceled";
            }
            return vacation;
        });
        setVacations(cancelVacation);
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-center">List Vacations</h2>
            <div className="flex flex-col items-center justify-center mt-4 w-1/2"> 
                <div className="flex flex-col items-center justify-center gap-8 w-full">
                    {vacations.map((vacation) => (
                        <div key={vacation.id} className="flex flex-col items-center justify-center w-full">
                            <div className="flex flex-col items-center justify-center w-full">
                                <h2 className="text-xl font-semibold text-center">{vacation.type}</h2>
                                <p className="text-center">{vacation.duration}</p>
                                <p className="text-center">{vacation.start_date} - {vacation.end_date}</p>
                                <p className="text-center">{vacation.description}</p>
                                <p className={gestionVacation(vacation.status)}>{vacation.status}</p>
                                {selectedVacation === vacation.id && (
                                    <div className="flex flex-col items-center justify-center w-full">
                                        <select className="w-full p-2 mt-2" onChange={(e) => setNewStatus(e.target.value)}>
                                            <option value="Requested">Requested</option>
                                            <option value="Validated">Validated</option>
                                            <option value="Refused">Refused</option>
                                        </select>
                                        <button className="bg-blue-500 text-white font-semibold rounded-lg p-2 mt-4" onClick={() => modifierVacation(vacation.id)}>Submit</button>
                                        <button className="bg-gray-500 text-white font-semibold rounded-lg p-2 mt-4" onClick={() => cancelVacation(vacation.id)}>Cancel</button>
                                    </div>
                                )}
                                {vacation.status !== "Validated" && selectedVacation !== vacation.id &&(
                                    <button className="bg-orange-500 text-white font-semibold rounded-lg p-2 mt-4" onClick={() => setSelectedVacation(vacation.id)}>Modify</button>
                                )}
                                <button className="bg-gray-500 text-white font-semibold rounded-lg p-2 mt-4" onClick={() => modifierVacation(vacation.id)}>Cancel</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListVacations;