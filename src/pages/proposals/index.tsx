import { ViewProposals } from "@/components/molecules/ViewProposals";

const proposals = [
    {
        "id": "113860413122673990559519176791855462601154904176199814084623297558392353268351",
        "title": "Sort of bring your money",
        "eta": "",
        "governor": {
            "name": "Zypto Polygon"
        },
        "voteStats": [
            {
                "support": "FOR",
                "weight": "0",
                "votes": "0",
                "percent": 0
            },
            {
                "support": "AGAINST",
                "weight": "0",
                "votes": "0",
                "percent": 0
            },
            {
                "support": "ABSTAIN",
                "weight": "0",
                "votes": "0",
                "percent": 0
            }
        ]
    },
    {
        "id": "7213206620264732297538204347580702999935948898017543673440589437528204105765",
        "title": "Zypto Test",
        "eta": "",
        "governor": {
            "name": "Zypto Polygon"
        },
        "voteStats": [
            {
                "support": "FOR",
                "weight": "10000000000000000000",
                "votes": "1",
                "percent": 100
            },
            {
                "support": "AGAINST",
                "weight": "0",
                "votes": "0",
                "percent": 0
            },
            {
                "support": "ABSTAIN",
                "weight": "0",
                "votes": "0",
                "percent": 0
            }
        ]
    },
    {
        "id": "18738864921157574778039140041380823591846252150892847862847996488925409249237",
        "title": "Just to Confirm",
        "eta": "",
        "governor": {
            "name": "Zypto Polygon"
        },
        "voteStats": [
            {
                "support": "FOR",
                "weight": "10000000000000000000",
                "votes": "1",
                "percent": 100
            },
            {
                "support": "AGAINST",
                "weight": "0",
                "votes": "0",
                "percent": 0
            },
            {
                "support": "ABSTAIN",
                "weight": "0",
                "votes": "0",
                "percent": 0
            }
        ]
    },
    {
        "id": "81453084982308264471776441127252547903566357231731968490602945440173438121218",
        "title": "Another Proposal",
        "eta": "",
        "governor": {
            "name": "Zypto Polygon"
        },
        "voteStats": [
            {
                "support": "FOR",
                "weight": "10000000000000000000",
                "votes": "1",
                "percent": 100
            },
            {
                "support": "AGAINST",
                "weight": "0",
                "votes": "0",
                "percent": 0
            },
            {
                "support": "ABSTAIN",
                "weight": "0",
                "votes": "0",
                "percent": 0
            }
        ]
    },
    {
        "id": "21211101301109106603157059508545615612387502811244413788071851790217868316560",
        "title": "Wise Mr Musa",
        "eta": "",
        "governor": {
            "name": "Zypto Polygon"
        },
        "voteStats": [
            {
                "support": "FOR",
                "weight": "10000000000000000000",
                "votes": "1",
                "percent": 100
            },
            {
                "support": "AGAINST",
                "weight": "0",
                "votes": "0",
                "percent": 0
            },
            {
                "support": "ABSTAIN",
                "weight": "0",
                "votes": "0",
                "percent": 0
            }
        ]
    },
    {
        "id": "104700007968992578593638606913908778407532520904618694654514330526675354667555",
        "title": "GoodMan",
        "eta": "",
        "governor": {
            "name": "Zypto Polygon"
        },
        "voteStats": [
            {
                "support": "FOR",
                "weight": "10000000000000000000",
                "votes": "1",
                "percent": 100
            },
            {
                "support": "AGAINST",
                "weight": "0",
                "votes": "0",
                "percent": 0
            },
            {
                "support": "ABSTAIN",
                "weight": "0",
                "votes": "0",
                "percent": 0
            }
        ]
    },
    {
        "id": "27603246976663095265764632805705707040783366307772414086803514295173116763967",
        "title": "sxxsxsa",
        "eta": "",
        "governor": {
            "name": "Zypto Polygon"
        },
        "voteStats": [
            {
                "support": "FOR",
                "weight": "10000000000000000000",
                "votes": "1",
                "percent": 100
            },
            {
                "support": "AGAINST",
                "weight": "0",
                "votes": "0",
                "percent": 0
            },
            {
                "support": "ABSTAIN",
                "weight": "0",
                "votes": "0",
                "percent": 0
            }
        ]
    },
    {
        "id": "85266030451237775030604510141425779584073469017928010795397362468320292594134",
        "title": "# House of Wisdom",
        "eta": "",
        "governor": {
            "name": "Zypto Polygon"
        },
        "voteStats": [
            {
                "support": "FOR",
                "weight": "10000000000000000000",
                "votes": "1",
                "percent": 100
            },
            {
                "support": "AGAINST",
                "weight": "0",
                "votes": "0",
                "percent": 0
            },
            {
                "support": "ABSTAIN",
                "weight": "0",
                "votes": "0",
                "percent": 0
            }
        ]
    }
]

export default function Page(){
    return(
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex justify-around bg-white p-4 ring-1 ring-slate-300 w-full rounded-md mt-6">
            <ViewProposals proposals={proposals} />
        </div>
        </div>
    )
}