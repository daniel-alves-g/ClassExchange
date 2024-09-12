import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";
import LocationSelection from "./LocationSection";
import { Button } from "../ui/button";

export default function SearchMobile() {
    return (
        <div className="xl:hidden font-medium">
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-4">
                    <LocationSelection />

                    <DateSelection />

                    <HoursSelection />

                    <div className="flex items-center px-6">
                       <Button className="mx-auto">Buscar</Button> 
                    </div>
                </div>
            </div>
        </div>
    );
}