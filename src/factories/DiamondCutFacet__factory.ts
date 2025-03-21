/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  DiamondCutFacet,
  DiamondCutFacetInterface,
} from "../DiamondCutFacet";

const _abi = [
  {
    type: "function",
    name: "diamondCut",
    inputs: [
      {
        name: "_diamondCut",
        type: "tuple[]",
        internalType: "struct LibDiamond.FacetCut[]",
        components: [
          {
            name: "facetAddress",
            type: "address",
            internalType: "address",
          },
          {
            name: "action",
            type: "uint8",
            internalType: "enum LibDiamond.FacetCutAction",
          },
          {
            name: "functionSelectors",
            type: "bytes4[]",
            internalType: "bytes4[]",
          },
        ],
      },
      {
        name: "_init",
        type: "address",
        internalType: "address",
      },
      {
        name: "_calldata",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "DiamondCut",
    inputs: [
      {
        name: "_diamondCut",
        type: "tuple[]",
        indexed: false,
        internalType: "struct LibDiamond.FacetCut[]",
        components: [
          {
            name: "facetAddress",
            type: "address",
            internalType: "address",
          },
          {
            name: "action",
            type: "uint8",
            internalType: "enum LibDiamond.FacetCutAction",
          },
          {
            name: "functionSelectors",
            type: "bytes4[]",
            internalType: "bytes4[]",
          },
        ],
      },
      {
        name: "_init",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "_calldata",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "CalldataEmptyButInitNotZero",
    inputs: [],
  },
  {
    type: "error",
    name: "FacetAddressIsNotZero",
    inputs: [],
  },
  {
    type: "error",
    name: "FacetAddressIsZero",
    inputs: [],
  },
  {
    type: "error",
    name: "FacetContainsNoCode",
    inputs: [],
  },
  {
    type: "error",
    name: "FunctionAlreadyExists",
    inputs: [],
  },
  {
    type: "error",
    name: "FunctionDoesNotExist",
    inputs: [],
  },
  {
    type: "error",
    name: "FunctionIsImmutable",
    inputs: [],
  },
  {
    type: "error",
    name: "IncorrectFacetCutAction",
    inputs: [],
  },
  {
    type: "error",
    name: "InitReverted",
    inputs: [],
  },
  {
    type: "error",
    name: "InitZeroButCalldataNotEmpty",
    inputs: [],
  },
  {
    type: "error",
    name: "NoSelectorsInFace",
    inputs: [],
  },
  {
    type: "error",
    name: "OnlyContractOwner",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506116e9806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80631f931c1c14610030575b600080fd5b61004361003e366004611101565b610045565b005b61004d61009e565b61009761005a858761127e565b8484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061011392505050565b5050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610111576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b60005b83518110156102a9576000848281518110610133576101336113da565b60200260200101516020015190506000600281111561015457610154611409565b81600281111561016657610166611409565b036101b4576101af858381518110610180576101806113da565b60200260200101516000015186848151811061019e5761019e6113da565b6020026020010151604001516102f4565b6102a0565b60018160028111156101c8576101c8611409565b03610211576101af8583815181106101e2576101e26113da565b602002602001015160000151868481518110610200576102006113da565b60200260200101516040015161058d565b600281600281111561022557610225611409565b0361026e576101af85838151811061023f5761023f6113da565b60200260200101516000015186848151811061025d5761025d6113da565b602002602001015160400151610836565b6040517fe548e6b500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50600101610116565b507f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb6738383836040516102dd939291906114a6565b60405180910390a16102ef8282610972565b505050565b805160000361032f576040517f7bc5595000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c73ffffffffffffffffffffffffffffffffffffffff831661039d576040517fc68ec83a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166000908152600182016020526040812054906bffffffffffffffffffffffff821690036103e5576103e58285610b13565b60005b8351811015610097576000848281518110610405576104056113da565b6020908102919091018101517fffffffff00000000000000000000000000000000000000000000000000000000811660009081529186905260409091205490915073ffffffffffffffffffffffffffffffffffffffff168015610494576040517fa023275d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fffffffff000000000000000000000000000000000000000000000000000000008216600081815260208781526040808320805473ffffffffffffffffffffffffffffffffffffffff908116740100000000000000000000000000000000000000006bffffffffffffffffffffffff8c16021782558c168085526001808c0185529285208054938401815585528385206008840401805463ffffffff60079095166004026101000a948502191660e08a901c94909402939093179092559390925287905281547fffffffffffffffffffffffff0000000000000000000000000000000000000000161790555050600191820191016103e8565b80516000036105c8576040517f7bc5595000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c73ffffffffffffffffffffffffffffffffffffffff8316610636576040517fc68ec83a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166000908152600182016020526040812054906bffffffffffffffffffffffff8216900361067e5761067e8285610b13565b60005b835181101561009757600084828151811061069e5761069e6113da565b6020908102919091018101517fffffffff00000000000000000000000000000000000000000000000000000000811660009081529186905260409091205490915073ffffffffffffffffffffffffffffffffffffffff9081169087168103610732576040517fa023275d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61073d858284610b89565b7fffffffff000000000000000000000000000000000000000000000000000000008216600081815260208781526040808320805473ffffffffffffffffffffffffffffffffffffffff908116740100000000000000000000000000000000000000006bffffffffffffffffffffffff8c16021782558c168085526001808c0185529285208054938401815585528385206008840401805463ffffffff60079095166004026101000a948502191660e08a901c94909402939093179092559390925287905281547fffffffffffffffffffffffff000000000000000000000000000000000000000016179055505060019182019101610681565b8051600003610871576040517f7bc5595000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c73ffffffffffffffffffffffffffffffffffffffff8316156108e0576040517f79c9df2200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b825181101561096c576000838281518110610900576109006113da565b6020908102919091018101517fffffffff00000000000000000000000000000000000000000000000000000000811660009081529185905260409091205490915073ffffffffffffffffffffffffffffffffffffffff16610962848284610b89565b50506001016108e3565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166109ca578051156109c6576040517f9811686000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b8051600003610a05576040517f4220056600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82163014610a2b57610a2b82611052565b6000808373ffffffffffffffffffffffffffffffffffffffff1683604051610a53919061160e565b600060405180830381855af49150503d8060008114610a8e576040519150601f19603f3d011682016040523d82523d6000602084013e610a93565b606091505b50915091508161096c57805115610ae157806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ad8919061162a565b60405180910390fd5b6040517fc53ebed500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b1c81611052565b60028201805473ffffffffffffffffffffffffffffffffffffffff90921660008181526001948501602090815260408220860185905594840183559182529290200180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169091179055565b73ffffffffffffffffffffffffffffffffffffffff8216610bd6576040517fa9ad62f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff831603610c25576040517fc3c5ec3700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fffffffff0000000000000000000000000000000000000000000000000000000081166000908152602084815260408083205473ffffffffffffffffffffffffffffffffffffffff86168452600180880190935290832054740100000000000000000000000000000000000000009091046bffffffffffffffffffffffff169291610caf91611644565b9050808214610df65773ffffffffffffffffffffffffffffffffffffffff841660009081526001860160205260408120805483908110610cf157610cf16113da565b6000918252602080832060088304015473ffffffffffffffffffffffffffffffffffffffff8916845260018a019091526040909220805460079092166004026101000a90920460e01b925082919085908110610d4f57610d4f6113da565b600091825260208083206008830401805463ffffffff60079094166004026101000a938402191660e09590951c929092029390931790557fffffffff0000000000000000000000000000000000000000000000000000000092909216825286905260409020805473ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000006bffffffffffffffffffffffff8516021790555b73ffffffffffffffffffffffffffffffffffffffff841660009081526001860160205260409020805480610e2c57610e2c611684565b6000828152602080822060087fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90940193840401805463ffffffff600460078716026101000a0219169055919092557fffffffff000000000000000000000000000000000000000000000000000000008516825286905260408120819055819003610097576002850154600090610ec590600190611644565b73ffffffffffffffffffffffffffffffffffffffff86166000908152600180890160205260409091200154909150808214610fb3576000876002018381548110610f1157610f116113da565b60009182526020909120015460028901805473ffffffffffffffffffffffffffffffffffffffff9092169250829184908110610f4f57610f4f6113da565b600091825260208083209190910180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff948516179055929091168152600189810190925260409020018190555b86600201805480610fc657610fc6611684565b6000828152602080822083017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905590920190925573ffffffffffffffffffffffffffffffffffffffff88168252600189810190915260408220015550505050505050565b803b60008190036109c6576040517fe350060000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b803573ffffffffffffffffffffffffffffffffffffffff811681146110b357600080fd5b919050565b60008083601f8401126110ca57600080fd5b50813567ffffffffffffffff8111156110e257600080fd5b6020830191508360208285010111156110fa57600080fd5b9250929050565b60008060008060006060868803121561111957600080fd5b853567ffffffffffffffff8082111561113157600080fd5b818801915088601f83011261114557600080fd5b81358181111561115457600080fd5b8960208260051b850101111561116957600080fd5b6020830197508096505061117f6020890161108f565b9450604088013591508082111561119557600080fd5b506111a2888289016110b8565b969995985093965092949392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715611205576112056111b3565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611252576112526111b3565b604052919050565b600067ffffffffffffffff821115611274576112746111b3565b5060051b60200190565b600061129161128c8461125a565b61120b565b83815260208082019190600586811b8601368111156112af57600080fd5b865b818110156113cd57803567ffffffffffffffff808211156112d25760008081fd5b818a019150606082360312156112e85760008081fd5b6112f06111e2565b6112f98361108f565b8152868301356003811061130d5760008081fd5b81880152604083810135838111156113255760008081fd5b939093019236601f85011261133c57600092508283fd5b8335925061134c61128c8461125a565b83815292871b840188019288810190368511156113695760008081fd5b948901945b848610156113b65785357fffffffff00000000000000000000000000000000000000000000000000000000811681146113a75760008081fd5b8252948901949089019061136e565b9183019190915250885250509483019483016112b1565b5092979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60005b8381101561145357818101518382015260200161143b565b50506000910152565b60008151808452611474816020860160208601611438565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60006060808301818452808751808352608092508286019150828160051b8701016020808b0160005b848110156115d1577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808a8503018652815188850173ffffffffffffffffffffffffffffffffffffffff82511686528482015160038110611558577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b868601526040918201519186018a905281519081905290840190600090898701905b808310156115bc5783517fffffffff0000000000000000000000000000000000000000000000000000000016825292860192600192909201919086019061157a565b509785019795505050908201906001016114cf565b505073ffffffffffffffffffffffffffffffffffffffff8a16908801528681036040880152611600818961145c565b9a9950505050505050505050565b60008251611620818460208701611438565b9190910192915050565b60208152600061163d602083018461145c565b9392505050565b8181038181111561167e577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea2646970667358221220654c3fe1956cc05dcf07eabe54cd6db636b8421e6e9fe07ffd97c9e07d4343e264736f6c63430008110033";

type DiamondCutFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DiamondCutFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DiamondCutFacet__factory extends ContractFactory {
  constructor(...args: DiamondCutFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DiamondCutFacet> {
    return super.deploy(overrides || {}) as Promise<DiamondCutFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DiamondCutFacet {
    return super.attach(address) as DiamondCutFacet;
  }
  override connect(signer: Signer): DiamondCutFacet__factory {
    return super.connect(signer) as DiamondCutFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DiamondCutFacetInterface {
    return new utils.Interface(_abi) as DiamondCutFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DiamondCutFacet {
    return new Contract(address, _abi, signerOrProvider) as DiamondCutFacet;
  }
}
