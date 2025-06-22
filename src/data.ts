// CPVC Product Data
import CpvcBrassElbow from "@/assets/cpvc/brass-elbow.png";
import CpvcBrassTee from "@/assets/cpvc/brass-tee.png";
import CpvcBrassFTA from "@/assets/cpvc/cpvc-brass-fta.webp";
import CpvcElbow from "@/assets/cpvc/elbow.png";
import CpvcTee from "@/assets/cpvc/tee.png";
import CpvcCoupler from "@/assets/cpvc/coupler.png";
import CpvcMTA from "@/assets/cpvc/mta.png";
import CpvcFTA from "@/assets/cpvc/fta.png";
import CpvcEndcap from "@/assets/cpvc/end-cap.png";
import CpvcUnion from "@/assets/cpvc/union.png";
import CpvcTankNipple from "@/assets/cpvc/tank-nipple.png";
import CpvcTankNippleThreaded from "@/assets/cpvc/tank-nipple-threated.png";
import CpvcCrossTee from "@/assets/cpvc/cross-tee.png";
import CpvcReducer from "@/assets/cpvc/reducer.png";
import CpvcReducerBush from "@/assets/cpvc/reducer-bush.png";
import CpvcBallValve from "@/assets/cpvc/ball-valve.png";
import CpvcSolvent from "@/assets/cpvc/cpvc-solvent.png";
import CpvcLongbend from "@/assets/cpvc/long-bend.jpg";
import CpvcStepoverBend from "@/assets/cpvc/stepover-bend.png";
import CpvcShoe from "@/assets/cpvc/shoe.png";
import CpvcNailClip from "@/assets/cpvc/nail-clip.png";
import CpvcTransitionBush from "@/assets/cpvc/transition-bush.png";
import CpvcPipe from "@/assets/cpvc/pipes.png";
import CpvcBrassMTA from "@/assets/cpvc/brass-mta.png";

// UPVC Product Data
import UpvcBrassElbow from "@/assets/upvc/brass-elbow.png";
import UpvcBrassTee from "@/assets/upvc/brass-tee.png";
import UpvcBrassMTA from "@/assets/upvc/brass-mta.png";
import UpvcBrassFTA from "@/assets/upvc/upvc-brass-fta.png";
import UpvcElbow from "@/assets/upvc/elbow.png";
import UpvcTee from "@/assets/upvc/tee.png";
import UpvcCoupler from "@/assets/upvc/coupler.png";
import UpvcFTA from "@/assets/upvc/fta.png";
import UpvcMTA from "@/assets/upvc/mta.png";
import UpvcEndcap from "@/assets/upvc/end-cap.png";
import UpvcUnion from "@/assets/upvc/union.png";
import UpvcTankNipple from "@/assets/upvc/tank-nipple.png";
import UpvcTankNippleThreaded from "@/assets/upvc/tank-nipple-threaded.png";
import UpvcCrossTee from "@/assets/upvc/cross-tee.png";
import UpvcReducer from "@/assets/upvc/reducer.png";
import UpvcReducerBush from "@/assets/upvc/reducer-bush.png";
import UpvcUnionNRV from "@/assets/upvc/union-nrv.png";
import UpvcBallValve from "@/assets/upvc/ball-valve.png";
import UpvcBallValveThreaded from "@/assets/upvc/ball-valve-threaded.png";
import UpvcSolvent from "@/assets/upvc/upvc-solvent.png";
import UpvcLongbend from "@/assets/upvc/long-bend.png";
import UpvcStepoverBend from "@/assets/upvc/stepover-bend.png";
import UpvcNailClamp from "@/assets/upvc/nail-clamp.png";
import UpvcElbowThreaded from "@/assets/upvc/elbow-threaded.png";
import UpvcBIBCockShortBody from "@/assets/upvc/bib-cock-short-body.png";
import UpvcBIBCockLongBody from "@/assets/upvc/bib-cock-long-body.webp";
import UpvcConcealedTee from "@/assets/upvc/concealed-tee.png";
import UpvcShoe from "@/assets/upvc/shoe.png";
import UpvcReducerTee from "@/assets/upvc/reducer-tee.png";
import UpvcPipe from "@/assets/upvc/pipe.png";

// SWR Product Data
import SwrBendDoor from "@/assets/swr/bend-door.jpg";
import SwrBend from "@/assets/swr/bend.png";
import SwrCoupler from "@/assets/swr/coupler.png";
import SwrDoorCap from "@/assets/swr/door-cap.png";
import SwrNaniTrap from "@/assets/swr/nani-trap.png";
import SwrPTrap from "@/assets/swr/p-trap.png";
import SwrPvcPipeClip from "@/assets/swr/pvc-pipe-clip.png";
import SwrReducerTee from "@/assets/swr/reducer-tee.png";
import SwrReducer from "@/assets/swr/reducer.png";
import SwrRubberRing from "@/assets/swr/rubber-ring.png";
import SwrSTrap from "@/assets/swr/s-trap.png";
import SwrShoeBend from "@/assets/swr/shoe-bend.png";
import SwrSingleTeeDoor from "@/assets/swr/single-tee-door.jpg";
import SwrSingleTee from "@/assets/swr/single-tee.png";
import SwrSingleYDoor from "@/assets/swr/single-y-door.png";
import SwrSingleY from "@/assets/swr/single-y.png";
import SwrPipes from "@/assets/swr/swr-pipes.jpg";
import SwrVentCowl from "@/assets/swr/vent-cowl.png";

// Echodrain Product Data
import EchodrainPipes from "@/assets/ecodrain.png";

// PVC Product Data
import PvcPipes from "@/assets/pvc.png";

export interface ProductVariant {
  id: string;
  size: string;
  packing: string;
  rate: string;
}

export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  variants: ProductVariant[];
}

export const categoryData: Record<string, Product[]> = {
  // UPVC Products
  upvc: [
    {
      id: "upvc-1",
      name: "Brass Elbow",
      image: UpvcBrassElbow,
      description:
        "A UPVC elbow with brass insert for 90° direction change in piping systems",
      variants: [
        {
          id: "upvc-v1.1",
          size: '1/2"',
          packing: "25",
          rate: "₹47",
        },
        {
          id: "upvc-v1.2",
          size: '3/4"',
          packing: "25",
          rate: "₹80",
        },
        {
          id: "upvc-v1.3",
          size: '1"',
          packing: "25",
          rate: "₹140",
        },
      ],
    },
    {
      id: "upvc-2",
      name: "Brass Tee",
      image: UpvcBrassTee,
      description:
        "UPVC brass tee fitting distributes flow to two branches with threaded strength",
      variants: [
        {
          id: "upvc-v2.1",
          size: '1/2"',
          packing: "25",
          rate: "₹50",
        },
        {
          id: "upvc-v2.2",
          size: '3/4"',
          packing: "25",
          rate: "₹80",
        },
        {
          id: "upvc-v2.3",
          size: '1"',
          packing: "45",
          rate: "₹166",
        },
      ],
    },
    {
      id: "upvc-3",
      name: "Brass M.T.A.",
      image: UpvcBrassMTA,
      description:
        "Male threaded adapter with UPVC body and brass insert for metal pipe transitions",
      variants: [
        {
          id: "upvc-v3.1",
          size: '1/2"',
          packing: "25",
          rate: "₹60",
        },
        {
          id: "upvc-v3.2",
          size: '3/4"',
          packing: "25",
          rate: "₹103",
        },
        {
          id: "upvc-v3.3",
          size: '1"',
          packing: "25",
          rate: "₹150",
        },
      ],
    },
    {
      id: "upvc-4",
      name: "Brass F.T.A.",
      image: UpvcBrassFTA,
      description:
        "A UPVC female threaded adapter with a brass insert, providing leak-proof transition from UPVC pipe to threaded metal fittings",
      variants: [
        {
          id: "upvc-v4.1",
          size: '1/2"',
          packing: "25",
          rate: "₹39",
        },
        {
          id: "upvc-v4.2",
          size: '3/4"',
          packing: "25",
          rate: "₹76",
        },
        {
          id: "upvc-v4.3",
          size: '1"',
          packing: "25",
          rate: "₹126",
        },
      ],
    },
    {
      id: "upvc-5",
      name: "Elbow",
      image: UpvcElbow,
      description: "90° UPVC elbow used to reroute piping runs.",
      variants: [
        {
          id: "upvc-v5.1",
          size: '1/2"',
          packing: "50",
          rate: "₹9.4",
        },
        {
          id: "upvc-v5.2",
          size: '3/4"',
          packing: "50",
          rate: "₹15.6",
        },
        {
          id: "upvc-v5.3",
          size: '1"',
          packing: "25",
          rate: "₹23.2",
        },
      ],
    },
    {
      id: "upvc-6",
      name: "Tee",
      image: UpvcTee,
      description:
        "UPVC tee fitting creates a branch in cold water plumbing systems.",
      variants: [
        {
          id: "upvc-v6.1",
          size: '1/2"',
          packing: "50",
          rate: "₹15.2",
        },
        {
          id: "upvc-v6.2",
          size: '3/4"',
          packing: "25",
          rate: "₹22.2",
        },
        {
          id: "upvc-v6.3",
          size: '1"',
          packing: "20",
          rate: "₹34.4",
        },
      ],
    },
    {
      id: "upvc-7",
      name: "Coupler",
      image: UpvcCoupler,
      description: "UPVC coupler joins two pipe segments inline.",
      variants: [
        {
          id: "upvc-v7.1",
          size: '1/2"',
          packing: "50",
          rate: "₹6.6",
        },
        {
          id: "upvc-v7.2",
          size: '3/4"',
          packing: "50",
          rate: "₹11.2",
        },
        {
          id: "upvc-v7.3",
          size: '1"',
          packing: "50",
          rate: "₹16.2",
        },
      ],
    },
    {
      id: "upvc-8",
      name: "F.T.A.",
      image: UpvcFTA,
      description:
        "Female threaded UPVC adapter for connecting to male-threaded fittings.",
      variants: [
        {
          id: "upvc-v8.1",
          size: '1/2"',
          packing: "50",
          rate: "₹8",
        },
        {
          id: "upvc-v8.2",
          size: '3/4"',
          packing: "50",
          rate: "₹13",
        },
        {
          id: "upvc-v8.3",
          size: '1"',
          packing: "25",
          rate: "₹19",
        },
      ],
    },
    {
      id: "upvc-9",
      name: "M.T.A.",
      image: UpvcMTA,
      description:
        "Male threaded adapter for connecting uPVC pipes to female-threaded fittings.",
      variants: [
        {
          id: "upvc-v9.1",
          size: '1/2"',
          packing: "50",
          rate: "₹8",
        },
        {
          id: "upvc-v9.2",
          size: '3/4"',
          packing: "50",
          rate: "₹12",
        },
        {
          id: "upvc-v9.3",
          size: '1"',
          packing: "25",
          rate: "₹16.2",
        },
      ],
    },
    {
      id: "upvc-10",
      name: "End Cap",
      image: UpvcEndcap,
      description: "Cap used to seal the end of a uPVC pipe.",
      variants: [
        {
          id: "upvc-v10.1",
          size: '1/2"',
          packing: "50",
          rate: "₹5.6",
        },
        {
          id: "upvc-v10.2",
          size: '3/4"',
          packing: "50",
          rate: "₹6.2",
        },
        {
          id: "upvc-v10.3",
          size: '1"',
          packing: "50",
          rate: "₹12.4",
        },
      ],
    },
    {
      id: "upvc-11",
      name: "Union",
      image: UpvcUnion,
      description:
        "Detachable joint for easy pipe disconnection and maintenance.",
      variants: [
        {
          id: "upvc-v11.1",
          size: '1/2"',
          packing: "50",
          rate: "₹29",
        },
        {
          id: "upvc-v11.2",
          size: '3/4"',
          packing: "25",
          rate: "₹42",
        },
        {
          id: "upvc-v11.3",
          size: '1"',
          packing: "25",
          rate: "₹55",
        },
      ],
    },
    {
      id: "upvc-12",
      name: "Tank Nipple",
      image: UpvcTankNipple,
      description: "Pipe fitting for connecting tanks to plumbing lines.",
      variants: [
        {
          id: "upvc-v12.1",
          size: '1/2"',
          packing: "25",
          rate: "₹20.2",
        },
        {
          id: "upvc-v12.2",
          size: '3/4"',
          packing: "25",
          rate: "₹33",
        },
        {
          id: "upvc-v12.3",
          size: '1"',
          packing: "25",
          rate: "₹47.4",
        },
      ],
    },
    {
      id: "upvc-13",
      name: "Tank Nipple (Threaded)",
      image: UpvcTankNippleThreaded,
      description: "Threaded tank connector for secure tank-to-pipe joint.",
      variants: [
        {
          id: "upvc-v13.1",
          size: '1/2"',
          packing: "50",
          rate: "₹23.4",
        },
        {
          id: "upvc-v13.2",
          size: '3/4"',
          packing: "25",
          rate: "₹33",
        },
        {
          id: "upvc-v13.3",
          size: '1"',
          packing: "25",
          rate: "₹46",
        },
      ],
    },
    {
      id: "upvc-14",
      name: "Cross Tee",
      image: UpvcCrossTee,
      description: "Four-way connector for intersecting uPVC pipelines.",
      variants: [
        {
          id: "upvc-v14.1",
          size: '1/2"',
          packing: "25",
          rate: "₹29",
        },
        {
          id: "upvc-v14.2",
          size: '3/4"',
          packing: "25",
          rate: "₹46",
        },
        {
          id: "upvc-v14.3",
          size: '1"',
          packing: "15",
          rate: "₹72",
        },
      ],
    },
    {
      id: "upvc-15",
      name: "Reducer",
      image: UpvcReducer,
      description: "Connector for joining pipes of different diameters.",
      variants: [
        {
          id: "upvc-v15.1",
          size: '1/2" x 3/4"',
          packing: "50",
          rate: "₹11.4",
        },
        {
          id: "upvc-v15.2",
          size: '1" x 1/2"',
          packing: "50",
          rate: "₹16.2",
        },
        {
          id: "upvc-v15.3",
          size: '1" x 3/4"',
          packing: "50",
          rate: "₹16.6",
        },
      ],
    },
    {
      id: "upvc-16",
      name: "Reducer Bush",
      image: UpvcReducerBush,
      description: "Bushing fitting used to reduce pipe size within joints.",
      variants: [
        {
          id: "upvc-v16.1",
          size: '1/2" x 3/4"',
          packing: "50",
          rate: "₹5.2",
        },
        {
          id: "upvc-v16.2",
          size: '1" x 1/2"',
          packing: "50",
          rate: "₹12.4",
        },
        {
          id: "upvc-v16.3",
          size: '1" x 3/4"',
          packing: "50",
          rate: "₹9",
        },
      ],
    },
    {
      id: "upvc-17",
      name: "Union + NRV",
      image: UpvcUnionNRV,
      description: "Union with non-return valve to prevent backflow.",
      variants: [
        {
          id: "upvc-v17.1",
          size: '1/2"',
          packing: "10",
          rate: "₹128",
        },
        {
          id: "upvc-v17.2",
          size: '3/4"',
          packing: "10",
          rate: "₹130",
        },
        {
          id: "upvc-v17.3",
          size: '1"',
          packing: "10",
          rate: "₹134",
        },
      ],
    },
    {
      id: "upvc-18",
      name: "Ball Valve",
      image: UpvcBallValve,
      description: "Lever-operated valve for on/off water flow control.",
      variants: [
        {
          id: "upvc-v18.1",
          size: '1/2"',
          packing: "10",
          rate: "₹68",
        },
        {
          id: "upvc-v18.2",
          size: '3/4"',
          packing: "10",
          rate: "₹88",
        },
        {
          id: "upvc-v18.3",
          size: '1"',
          packing: "10",
          rate: "₹120",
        },
      ],
    },
    {
      id: "upvc-19",
      name: "Ball Valve (Threaded)",
      image: UpvcBallValveThreaded,
      description: "Threaded ball valve for secure, controllable connections.",
      variants: [
        {
          id: "upvc-v19.1",
          size: '1/2"',
          packing: "10",
          rate: "₹84",
        },
        {
          id: "upvc-v19.2",
          size: '3/4"',
          packing: "10",
          rate: "₹100",
        },
        {
          id: "upvc-v19.3",
          size: '1"',
          packing: "10",
          rate: "₹130",
        },
      ],
    },
    {
      id: "upvc-20",
      name: "Solvent",
      image: UpvcSolvent,
      description: "Adhesive used for bonding uPVC pipes and fittings.",
      variants: [
        {
          id: "upvc-v20.1",
          size: "10 ML",
          packing: "100",
          rate: "₹18",
        },
        {
          id: "upvc-v20.2",
          size: "50 ML",
          packing: "30",
          rate: "₹74",
        },
        {
          id: "upvc-v20.3",
          size: "118 ML",
          packing: "24",
          rate: "₹140",
        },
      ],
    },
    {
      id: "upvc-21",
      name: "Stepover Bend",
      image: UpvcStepoverBend,
      description: "Bend used to route pipes over obstacles or offsets.",
      variants: [
        {
          id: "upvc-v21.1",
          size: '1/2"',
          packing: "25",
          rate: "₹42",
        },
        {
          id: "upvc-v21.2",
          size: '3/4"',
          packing: "20",
          rate: "₹50",
        },
        {
          id: "upvc-v21.3",
          size: '1"',
          packing: "15",
          rate: "₹74",
        },
      ],
    },
    {
      id: "upvc-22",
      name: "Long Bend",
      image: UpvcLongbend,
      description: "Long-radius bend for smooth directional changes.",
      variants: [
        {
          id: "upvc-v22.1",
          size: '1/2"',
          packing: "100",
          rate: "₹33",
        },
        {
          id: "upvc-v22.2",
          size: '3/4"',
          packing: "100",
          rate: "₹44",
        },
        {
          id: "upvc-v22.3",
          size: '1"',
          packing: "100",
          rate: "₹64",
        },
      ],
    },
    {
      id: "upvc-23",
      name: "Nail Clamp",
      image: UpvcNailClamp,
      description: "Clamp for fixing pipes securely to walls or surfaces.",
      variants: [
        {
          id: "upvc-v23.1",
          size: '1/2"',
          packing: "100",
          rate: "₹5",
        },
        {
          id: "upvc-v23.2",
          size: '3/4"',
          packing: "100",
          rate: "₹6.6",
        },
        {
          id: "upvc-v23.3",
          size: '1"',
          packing: "100",
          rate: "₹8.4",
        },
      ],
    },
    {
      id: "upvc-24",
      name: "Elbow (Threaded)",
      image: UpvcElbowThreaded,
      description: "Threaded elbow for angled pipe connections.",
      variants: [
        {
          id: "upvc-v24.1",
          size: '1/2"',
          packing: "35",
          rate: "₹13.8",
        },
      ],
    },
    {
      id: "upvc-25",
      name: "Bib Cock (Short Body)",
      image: UpvcBIBCockShortBody,
      description: "Short-body tap for quick water outlet control.",
      variants: [
        {
          id: "upvc-v25.1",
          size: '1/2"',
          packing: "12",
          rate: "₹54",
        },
      ],
    },
    {
      id: "upvc-26",
      name: "Bib Cock (Long Body)",
      image: UpvcBIBCockLongBody,
      description: "Long-body tap for extended water outlet reach.",
      variants: [
        {
          id: "upvc-v26.1",
          size: '1/2"',
          packing: "10",
          rate: "₹60",
        },
      ],
    },
    {
      id: "upvc-27",
      name: "Concealed Tee",
      image: UpvcConcealedTee,
      description: "Hidden tee fitting for neat pipe branching.",
      variants: [
        {
          id: "upvc-v27.1",
          size: '1/2"',
          packing: "1",
          rate: "₹620",
        },
      ],
    },
    {
      id: "upvc-28",
      name: "Shoe",
      image: UpvcShoe,
      description: "End fitting for directing water flow downward.",
      variants: [
        {
          id: "upvc-v28.1",
          size: '1/2"',
          packing: "50",
          rate: "₹12.6",
        },
        {
          id: "upvc-v28.2",
          size: '3/4"',
          packing: "25",
          rate: "₹18.5",
        },
        {
          id: "upvc-v28.3",
          size: '1"',
          packing: "25",
          rate: "₹30.2",
        },
      ],
    },
    {
      id: "upvc-29",
      name: "Reducer Tee",
      image: UpvcReducerTee,
      description: "Tee with reducing outlet for different pipe sizes.",
      variants: [
        {
          id: "upvc-v3.1",
          size: '1" x 1/2"',
          packing: "25",
          rate: "₹29",
        },
        {
          id: "upvc-v3.2",
          size: '1" x 3/4"',
          packing: "25",
          rate: "₹30",
        },
        {
          id: "upvc-v29.3",
          size: '1/2" x 3/4"',
          packing: "25",
          rate: "₹20",
        },
      ],
    },
    {
      id: "upvc-30",
      name: "Pipe",
      image: UpvcPipe,
      description: "Durable uPVC piping for water supply and plumbing.",
      variants: [
        {
          id: "upvc-v30.1",
          size: '1/2" (3 MTR)',
          packing: "50",
          rate: "₹150",
        },
        {
          id: "upvc-v30.2",
          size: '3/4" (3 MTR)',
          packing: "40",
          rate: "₹202",
        },
        {
          id: "upvc-v30.3",
          size: '1" (3 MTR)',
          packing: "25",
          rate: "₹290",
        },
      ],
    },
  ],

  // CPVC Products
  cpvc: [
    {
      id: "cpvc-1",
      name: "Brass Elbow",
      image: CpvcBrassElbow,
      description:
        "CPVC elbow with brass insert for strong, leak-proof metal-to-plastic connections.",
      variants: [
        {
          id: "cpvc-v1.1",
          size: '1/2" x 3/4"',
          packing: "35",
          rate: "₹80",
        },
        {
          id: "cpvc-v1.2",
          size: '1" x 1"',
          packing: "35",
          rate: "₹156",
        },
      ],
    },
    {
      id: "cpvc-2",
      name: "Brass Tee",
      image: CpvcBrassTee,
      description:
        "Tee fitting with brass threaded port for mixed metal-plastic joints.",
      variants: [
        {
          id: "cpvc-v2.1",
          size: '1/2" x 3/4"',
          packing: "35",
          rate: "₹80",
        },
        {
          id: "cpvc-v2.2",
          size: '1" x 1"',
          packing: "25",
          rate: "₹160",
        },
      ],
    },
    {
      id: "cpvc-3",
      name: "Brass M.T.A.",
      image: CpvcBrassMTA,
      description:
        "Male threaded adapter with brass insert for robust connections.",
      variants: [
        {
          id: "cpvc-v3.1",
          size: '1/2" x 3/4"',
          packing: "35",
          rate: "₹88",
        },
        {
          id: "cpvc-v3.2",
          size: '1" x 1"',
          packing: "35",
          rate: "₹120",
        },
      ],
    },
    {
      id: "cpvc-4",
      name: "Brass F.T.A.",
      image: CpvcBrassFTA,
      description:
        "Female threaded adapter with brass lining for metal pipe connections.",
      variants: [
        {
          id: "cpvc-v4.1",
          size: '1/2" x 3/4"',
          packing: "35",
          rate: "₹76",
        },
        {
          id: "cpvc-v4.2",
          size: '1" x 1"',
          packing: "35",
          rate: "₹120",
        },
      ],
    },
    {
      id: "cpvc-5",
      name: "Elbow",
      image: CpvcElbow,
      description: "90-degree bend for directional changes in CPVC piping.",
      variants: [
        {
          id: "cpvc-v5.1",
          size: '3/4"',
          packing: "35",
          rate: "₹13",
        },
        {
          id: "cpvc-v5.2",
          size: '1"',
          packing: "35",
          rate: "₹26",
        },
      ],
    },
    {
      id: "cpvc-6",
      name: "Tee",
      image: CpvcTee,
      description: "T-shaped fitting for branching pipelines.",
      variants: [
        {
          id: "cpvc-v6.1",
          size: '3/4"',
          packing: "35",
          rate: "₹17.2",
        },
        {
          id: "cpvc-v6.2",
          size: '1"',
          packing: "35",
          rate: "₹33.4",
        },
      ],
    },
    {
      id: "cpvc-7",
      name: "F.T.A.",
      image: CpvcFTA,
      description:
        "Female threaded adapter for connecting to male-threaded parts.",
      variants: [
        {
          id: "cpvc-v7.1",
          size: '3/4" x 3/4"',
          packing: "35",
          rate: "₹13.6",
        },
        {
          id: "cpvc-v7.2",
          size: '1"',
          packing: "35",
          rate: "₹25.8",
        },
      ],
    },
    {
      id: "cpvc-8",
      name: "Coupler",
      image: CpvcCoupler,
      description: "Straight connector for joining two CPVC pipes.",
      variants: [
        {
          id: "cpvc-v8.1",
          size: '3/4"',
          packing: "35",
          rate: "₹8",
        },
        {
          id: "cpvc-v8.2",
          size: '1"',
          packing: "35",
          rate: "₹16",
        },
      ],
    },
    {
      id: "cpvc-9",
      name: "End Cap",
      image: CpvcEndcap,
      description: "Cap used to close the end of a CPVC pipe.",
      variants: [
        {
          id: "cpvc-v9.1",
          size: '3/4"',
          packing: "35",
          rate: "₹7",
        },
        {
          id: "cpvc-v9.2",
          size: '1"',
          packing: "35",
          rate: "₹14",
        },
      ],
    },
    {
      id: "cpvc-10",
      name: "Union",
      image: CpvcUnion,
      description:
        "Removable joint allowing pipe disconnection without cutting.",
      variants: [
        {
          id: "cpvc-v10.1",
          size: '3/4"',
          packing: "35",
          rate: "₹45",
        },
        {
          id: "cpvc-v10.2",
          size: '1"',
          packing: "35",
          rate: "₹64",
        },
      ],
    },
    {
      id: "cpvc-11",
      name: "c-PVC Solvent",
      image: CpvcSolvent,
      description: "Special adhesive for CPVC pipe and fitting bonding.",
      variants: [
        {
          id: "cpvc-v11.1",
          size: "10 ML",
          packing: "35",
          rate: "₹23",
        },
        {
          id: "cpvc-v11.2",
          size: "50 ML",
          packing: "35",
          rate: "₹92",
        },
      ],
    },
    {
      id: "cpvc-12",
      name: "Ball Valve",
      image: CpvcBallValve,
      description: "On/off valve with easy lever operation.",
      variants: [
        {
          id: "cpvc-v12.1",
          size: '3/4"',
          packing: "35",
          rate: "₹150",
        },
        {
          id: "cpvc-v12.2",
          size: '1"',
          packing: "35",
          rate: "₹208",
        },
      ],
    },
    {
      id: "cpvc-13",
      name: "Tank Nipple (Threaded)",
      image: CpvcTankNippleThreaded,
      description: "Threaded tank connector for leak-proof joints.",
      variants: [
        {
          id: "cpvc-v13.1",
          size: '3/4"',
          packing: "35",
          rate: "₹48",
        },
        {
          id: "cpvc-v13.2",
          size: '1"',
          packing: "35",
          rate: "₹74",
        },
      ],
    },
    {
      id: "cpvc-14",
      name: "Tank Nipple",
      image: CpvcTankNipple,
      description: "Connector for linking tanks to CPVC pipelines.",
      variants: [
        {
          id: "cpvc-v14.1",
          size: '3/4"',
          packing: "35",
          rate: "₹36",
        },
        {
          id: "cpvc-v14.2",
          size: '1"',
          packing: "35",
          rate: "₹56",
        },
      ],
    },
    {
      id: "cpvc-15",
      name: "Reducer",
      image: CpvcReducer,
      description: "Adapter for joining pipes of different diameters.",
      variants: [
        {
          id: "cpvc-v15.1",
          size: '1" x 3/4"',
          packing: "35",
          rate: "₹12.4",
        },
      ],
    },
    {
      id: "cpvc-16",
      name: "Reducer Bush",
      image: CpvcReducerBush,
      description: "Bushing used to reduce fitting size inside joints.",
      variants: [
        {
          id: "cpvc-v16.1",
          size: '1" x 3/4"',
          packing: "35",
          rate: "₹12.4",
        },
      ],
    },
    {
      id: "cpvc-17",
      name: "Long Bend",
      image: CpvcLongbend,
      description: "Wide-radius bend for smoother directional flow.",
      variants: [
        {
          id: "cpvc-v17.1",
          size: '3/4"',
          packing: "25",
          rate: "₹53",
        },
        {
          id: "cpvc-v17.2",
          size: '1"',
          packing: "20",
          rate: "₹80",
        },
      ],
    },
    {
      id: "cpvc-18",
      name: "Stepover Bend",
      image: CpvcStepoverBend,
      description: "Offset bend to route over obstacles.",
      variants: [
        {
          id: "cpvc-v18.1",
          size: '3/4"',
          packing: "25",
          rate: "₹66",
        },
        {
          id: "cpvc-v18.2",
          size: '1"',
          packing: "20",
          rate: "₹106",
        },
      ],
    },
    {
      id: "cpvc-19",
      name: "Shoe",
      image: CpvcShoe,
      description:
        "Downward-facing outlet fitting for vertical flow direction.",
      variants: [
        {
          id: "cpvc-v19.1",
          size: '3/4"',
          packing: "35",
          rate: "₹22",
        },
        {
          id: "cpvc-v19.2",
          size: '1"',
          packing: "35",
          rate: "₹29",
        },
      ],
    },
    {
      id: "cpvc-20",
      name: "Cross Tee",
      image: CpvcCrossTee,
      description: "Four-way cross fitting for intersecting pipelines.",
      variants: [
        {
          id: "cpvc-v20.1",
          size: '3/4"',
          packing: "35",
          rate: "₹30",
        },
        {
          id: "cpvc-v20.2",
          size: '1"',
          packing: "35",
          rate: "₹57",
        },
      ],
    },
    {
      id: "cpvc-21",
      name: "",
      image: CpvcNailClip,
      description: "Clip used to fix CPVC pipes to walls or ceilings.",
      variants: [
        {
          id: "cpvc-v21.1",
          size: '3/4"',
          packing: "100",
          rate: "₹4",
        },
        {
          id: "cpvc-v21.2",
          size: '1"',
          packing: "100",
          rate: "₹6.5",
        },
      ],
    },
    {
      id: "cpvc-22",
      name: "",
      image: CpvcTransitionBush,
      description: "Fitting to join CPVC to metal or other piping materials.",
      variants: [
        {
          id: "cpvc-v22.1",
          size: '3/4" x 3/4"',
          packing: "25",
          rate: "₹10.5",
        },
        {
          id: "cpvc-v22.2",
          size: '1" x 1"',
          packing: "25",
          rate: "₹24",
        },
      ],
    },
    {
      id: "cpvc-23",
      name: "",
      image: CpvcPipe,
      description: "Heat-resistant CPVC pipe for hot and cold water systems.",
      variants: [
        {
          id: "cpvc-v23.1",
          size: '3/4"',
          packing: "50",
          rate: "₹220",
        },
        {
          id: "cpvc-v23.2",
          size: '1"',
          packing: "50",
          rate: "₹370",
        },
      ],
    },
    {
      id: "cpvc-24",
      name: "M.T.A.",
      image: CpvcMTA,
      description:
        "Male threaded adapter for connecting to female-threaded parts.",
      variants: [
        {
          id: "cpvc-v24.1",
          size: '3/4" x 3/4"',
          packing: "35",
          rate: "₹13",
        },
        {
          id: "cpvc-v24.2",
          size: '1" x 1"',
          packing: "35",
          rate: "₹19.4",
        },
      ],
    },
  ],
  pvc: [
    {
      id: "pvc-1",
      name: "PVC Pipe (Jay Kisan)",
      image: PvcPipes,
      description:
        "Lightweight, durable piping used for cold water supply, drainage, and irrigation systems.",
      variants: [
        {
          id: "pvc-v1.1",
          size: "20",
          packing: "0.7 kg",
          rate: "₹114",
        },
        {
          id: "pvc-v1.2",
          size: "25",
          packing: "0.9 kg",
          rate: "₹126",
        },
        {
          id: "pvc-v1.3",
          size: "32",
          packing: "1.2 kg",
          rate: "₹168",
        },
        {
          id: "pvc-v1.4",
          size: "40",
          packing: "1.6 kg",
          rate: "₹224",
        },
        {
          id: "pvc-v1.5",
          size: "50",
          packing: "2.2 kg",
          rate: "₹286",
        },
        {
          id: "pvc-v1.6",
          size: "63",
          packing: "2.8 kg",
          rate: "₹396",
        },
        {
          id: "pvc-v1.7",
          size: "75",
          packing: "3.8 kg",
          rate: "₹510",
        },
        {
          id: "pvc-v1.8",
          size: "90",
          packing: "5.5 kg",
          rate: "₹536",
        },
        {
          id: "pvc-v1.9",
          size: "110",
          packing: "6.5 kg",
          rate: "₹1004",
        },
        {
          id: "pvc-v2.0",
          size: "140",
          packing: "14 kg",
          rate: "₹1876",
        },
        {
          id: "pvc-v2.1",
          size: "160",
          packing: "18 kg",
          rate: "₹2546",
        },
        {
          id: "pvc-v2.2",
          size: "180",
          packing: "22 kg",
          rate: "₹3080",
        },
        {
          id: "pvc-v2.3",
          size: "200",
          packing: "28 kg",
          rate: "₹3920",
        },
      ],
    },
    {
      id: "pvc-2",
      name: "PVC Pipe (Kisan Gold)",
      image: PvcPipes,
      description:
        "Lightweight, durable piping used for cold water supply, drainage, and irrigation systems.",
      variants: [
        {
          id: "pvc-v2.1",
          size: "63",
          packing: "3.7 kg",
          rate: "₹468",
        },
        {
          id: "pvc-v2.2",
          size: "75",
          packing: "4.5 kg",
          rate: "₹602",
        },
        {
          id: "pvc-v2.3",
          size: "90",
          packing: "6.5 kg",
          rate: "₹870",
        },
        {
          id: "pvc-v2.4",
          size: "110",
          packing: "7.5 kg",
          rate: "₹1138",
        },
        {
          id: "pvc-v2.5",
          size: "140",
          packing: "16 kg",
          rate: "₹2144",
        },
        {
          id: "pvc-v2.6",
          size: "160",
          packing: "24 kg",
          rate: "₹3216",
        },
      ],
    },
  ],
  swr: [
    {
      id: "swr-1",
      name: "Reducer",
      image: SwrReducer,
      description: "Fitting to connect pipes of different diameters.",
      variants: [
        {
          id: "swr-v1.1",
          size: "110x75 mm",
          packing: "120 (Box)",
          rate: "₹64",
        },
      ],
    },
    {
      id: "swr-2",
      name: "Single Tee",
      image: SwrSingleTee,
      description: "T-fitting used for branching waste lines.",
      variants: [
        {
          id: "swr-v2.1",
          size: "75 mm",
          packing: "87 (Box)",
          rate: "₹70",
        },
        {
          id: "swr-v2.2",
          size: "110 mm",
          packing: "30 (Box)",
          rate: "₹154",
        },
      ],
    },
    {
      id: "swr-3",
      name: "PVC Pipe Clip",
      image: SwrPvcPipeClip,
      description: "Clip used to support and secure SWR pipes to surfaces.",
      variants: [
        {
          id: "swr-v3.1",
          size: "75 mm",
          packing: "500 (Box)",
          rate: "₹17",
        },
        {
          id: "swr-v3.2",
          size: "110 mm",
          packing: "500 (Box)",
          rate: "₹22",
        },
      ],
    },
    {
      id: "swr-4",
      name: "Bend",
      image: SwrBend,
      description:
        "Curved fitting for changing the direction of SWR pipelines.",
      variants: [
        {
          id: "swr-v4.1",
          size: "75 mm",
          packing: "108 (Box)",
          rate: "₹55",
        },
        {
          id: "swr-v4.2",
          size: "110 mm",
          packing: "38 (Box)",
          rate: "₹110",
        },
      ],
    },
    {
      id: "swr-5",
      name: "Shoe Bend",
      image: SwrShoeBend,
      description:
        "Bend fitting that directs water flow downward at the outlet.",
      variants: [
        {
          id: "swr-v5.1",
          size: "75 mm",
          packing: "120 (Box)",
          rate: "₹46",
        },
        {
          id: "swr-v5.2",
          size: "110 mm",
          packing: "48 (Box)",
          rate: "₹87",
        },
      ],
    },
    {
      id: "swr-6",
      name: "Single Y",
      image: SwrSingleY,
      description: "Angled Y-branch for smoother flow in branch lines.",
      variants: [
        {
          id: "swr-v6.1",
          size: "75 mm",
          packing: "60 (Box)",
          rate: "₹98",
        },
        {
          id: "swr-v6.2",
          size: "110 mm",
          packing: "18 (Box)",
          rate: "₹194",
        },
      ],
    },
    {
      id: "swr-7",
      name: "Coupler",
      image: SwrCoupler,
      description: "Connector used to join two straight SWR pipe lengths.",
      variants: [
        {
          id: "swr-v7.1",
          size: "75 mm",
          packing: "164 (Box)",
          rate: "₹38",
        },
        {
          id: "swr-v7.2",
          size: "110 mm",
          packing: "60 (Box)",
          rate: "₹72",
        },
      ],
    },
    {
      id: "swr-8",
      name: "Vent Cowl",
      image: SwrVentCowl,
      description:
        "Cowl fitting placed on top of vent pipes to prevent debris entry.",
      variants: [
        {
          id: "swr-v8.1",
          size: "75 mm",
          packing: "275 (Box)",
          rate: "₹22",
        },
        {
          id: "swr-v8.2",
          size: "110 mm",
          packing: "220 (Box)",
          rate: "₹38",
        },
      ],
    },
    {
      id: "swr-9",
      name: "SWR Pipes",
      image: SwrPipes,
      description:
        "Strong, durable pipes for soil, waste, and rainwater drainage.",
      variants: [
        {
          id: "swr-v9.1",
          size: "75 mm",
          packing: "1.5 Kg",
          rate: "₹196",
        },
        {
          id: "swr-v9.2",
          size: "75 mm",
          packing: "2 Kg",
          rate: "₹260",
        },
        {
          id: "swr-v9.3",
          size: "75 mm",
          packing: "2.25 Kg",
          rate: "₹290",
        },
        {
          id: "swr-v9.4",
          size: "110 mm",
          packing: "2.5 Kg",
          rate: "₹326",
        },
        {
          id: "swr-v9.5",
          size: "110 mm",
          packing: "3 Kg",
          rate: "₹390",
        },
        {
          id: "swr-v9.6",
          size: "110 mm",
          packing: "3.5 Kg",
          rate: "₹450",
        },
      ],
    },
    {
      id: "swr-10",
      name: "Bend (Door)",
      image: SwrBendDoor,
      description:
        "Bend with cleaning door for easy access to remove blockages.",
      variants: [
        {
          id: "swr-v10.1",
          size: "75 mm",
          packing: "76 (box)",
          rate: "₹79",
        },
        {
          id: "swr-v10.2",
          size: "110 mm",
          packing: "30 (box)",
          rate: "₹150",
        },
      ],
    },
    {
      id: "swr-11",
      name: "Single Tee (Door)",
      image: SwrSingleTeeDoor,
      description:
        "Single tee with access door for maintenance and inspection.",
      variants: [
        {
          id: "swr-v11.1",
          size: "75 mm",
          packing: "56 (box)",
          rate: "₹98",
        },
        {
          id: "swr-v11.2",
          size: "110 mm",
          packing: "21 (box)",
          rate: "₹200",
        },
      ],
    },
    {
      id: "swr-12",
      name: "Reducer Tee (Door)",
      image: SwrReducerTee,
      description:
        "Tee fitting with reduced outlet for branch line of smaller size.",
      variants: [
        {
          id: "swr-v12.1",
          size: "110x75 mm",
          packing: "30 (box)",
          rate: "₹140",
        },
      ],
    },
    {
      id: "swr-13",
      name: "Single Y (Door)",
      image: SwrSingleYDoor,
      description: "Y-fitting with door for access to waste line junctions.",
      variants: [
        {
          id: "swr-v13.1",
          size: "75 mm",
          packing: "48 (box)",
          rate: "₹118",
        },
        {
          id: "swr-v13.2",
          size: "110 mm",
          packing: "16 (box)",
          rate: "₹244",
        },
      ],
    },
    {
      id: "swr-14",
      name: "P Trap",
      image: SwrPTrap,
      description: "Trap with water seal to prevent odor from waste lines.",
      variants: [
        {
          id: "swr-v14.1",
          size: "110x110 mm",
          packing: "18 (box)",
          rate: "₹242",
        },
      ],
    },
    {
      id: "swr-15",
      name: "Rubber Ring",
      image: SwrRubberRing,
      description:
        "Sealing ring used in SWR joints for leak-proof connections.",
      variants: [
        {
          id: "swr-v15.1",
          size: "75 mm",
          packing: "1000 (box)",
          rate: "₹8",
        },
        {
          id: "swr-v15.2",
          size: "110 mm",
          packing: "500 (box)",
          rate: "₹10",
        },
      ],
    },
    {
      id: "swr-16",
      name: "S Trap",
      image: SwrSTrap,
      description:
        "S-shaped trap used under sanitary fixtures for odor control.",
      variants: [
        {
          id: "swr-v16.1",
          size: "110x110 mm",
          packing: "14 (box)",
          rate: "₹310",
        },
      ],
    },
    {
      id: "swr-17",
      name: "Door Cap",
      image: SwrDoorCap,
      description: "Removable cap with access door for pipeline inspection.",
      variants: [
        {
          id: "swr-v17.1",
          size: "75 mm",
          packing: "200 (box)",
          rate: "₹16",
        },
        {
          id: "swr-v17.2",
          size: "110 mm",
          packing: "150 (box)",
          rate: "₹31",
        },
      ],
    },
    {
      id: "swr-18",
      name: "Nani Trap",
      image: SwrNaniTrap,
      description:
        "Compact trap used in floor drain systems to block foul gases.",
      variants: [
        {
          id: "swr-v18.1",
          size: "110x110 mm",
          packing: "30 (box)",
          rate: "₹162",
        },
        {
          id: "swr-v18.2",
          size: "110x75 mm",
          packing: "55 (box)",
          rate: "₹105",
        },
      ],
    },
  ],
  ecodrain: [
    {
      id: "eco-1",
      name: "EcoDrain Pipes",
      image: EchodrainPipes,
      description:
        "Eco-friendly, high-capacity drainage pipes designed for efficient stormwater and surface runoff management.",
      variants: [
        {
          id: "eco-v1.1",
          size: "110mm",
          packing: "3.5",
          rate: "₹460",
        },
        {
          id: "eco-v1.2",
          size: "110mm",
          packing: "4",
          rate: "₹520",
        },
        {
          id: "eco-v1.3",
          size: "160mm",
          packing: "7.2",
          rate: "₹940",
        },
        {
          id: "eco-v1.5",
          size: "160mm",
          packing: "7.5",
          rate: "₹980",
        },
        {
          id: "eco-v1.5",
          size: "200mm",
          packing: "14",
          rate: "₹1980",
        },
      ],
    },
  ],
};
