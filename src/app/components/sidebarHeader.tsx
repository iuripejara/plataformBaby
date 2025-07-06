import Image from "next/image";

export default function SidebarHeader() {
    return (
        <div className="relative overflow-hidden">
            <div className="w-full h-56 relative overflow-hidden shadow-md">
                <Image 
                    src="/ivy4.jpg"
                    alt="beby" 
                    fill
                    priority
                    className="object-cover rounded-t-md"
                />
            </div>
        </div> 
    )
}