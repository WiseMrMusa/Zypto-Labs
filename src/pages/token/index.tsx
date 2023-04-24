import { ChoosePlan } from "@/components/elements/ChoosePlan"
import { DisplayPricePlan } from "@/components/elements/DisplayPricePlan"

export default function Page() {
    return (
        <div className=" border-gray-200 py-8 sm:py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-medium tracking-tight text-gray-900">Flat pricing, no management fees.</h2>
                    <p className="mt-2 text-lg text-gray-600">You can join our platform with a convenient payment scheme and start benefiting from the community .</p>
                </div>
                <div className="mt-8 flex justify-center">
                    <div className="relative">
                        <ChoosePlan />
                    </div>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-3">
                    <DisplayPricePlan
                        plan="Starter"
                        price={0}
                        description={"Bring your money"}
                        buttonLabel={"Join DAO"}
                        benefits={["Join the DAO", "10 Voting Power", "Invest up to $1,500 each month"]}
                 
                    />
                    <DisplayPricePlan
                        plan="Investor"
                        price={100}
                        description={"Bring your money"}
                        buttonLabel={"Join DAO"}
                        benefits={["Join the DAO", "20 Voting Power", "Invest up to $15,000 each month"]}
                       
                    />
                    <DisplayPricePlan
                        plan="VIP"
                        price={1500}
                        description={"Bring your money"}
                        buttonLabel={"Join DAO"}
                        benefits={["Join the DAO", "50 Voting Power", "No investment limits"]}
                        special
                    />
                </div>
            </div>
        </div>
    )
}