/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  EmergencyPauseFacet,
  EmergencyPauseFacetInterface,
} from "../EmergencyPauseFacet";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_pauserWallet",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "fallback",
    stateMutability: "payable",
  },
  {
    type: "receive",
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "pauseDiamond",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "pauserWallet",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "removeFacet",
    inputs: [
      {
        name: "_facetAddress",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "unpauseDiamond",
    inputs: [
      {
        name: "_blacklist",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "EmergencyFacetRemoved",
    inputs: [
      {
        name: "facetAddress",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "msgSender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "EmergencyPaused",
    inputs: [
      {
        name: "msgSender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "EmergencyUnpaused",
    inputs: [
      {
        name: "msgSender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "DiamondIsPaused",
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
    name: "FacetIsNotRegistered",
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
    name: "InvalidCallData",
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
  {
    type: "error",
    name: "UnAuthorized",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x60c060405234801561001057600080fd5b50604051611aec380380611aec83398101604081905261002f91610044565b6001600160a01b03166080523060a052610074565b60006020828403121561005657600080fd5b81516001600160a01b038116811461006d57600080fd5b9392505050565b60805160a051611a386100b4600039600081816101e60152818161079b0152610ea001526000818160d00152818161014801526106c10152611a386000f3fe6080604052600436106100435760003560e01c80630340e9051461007c5780632fc487ae1461009e5780635ad317a4146100be578063f86368ae1461011b5761004a565b3661004a57005b6040517f0149422e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b34801561008857600080fd5b5061009c610097366004611883565b610130565b005b3480156100aa57600080fd5b5061009c6100b93660046118c0565b61047d565b3480156100ca57600080fd5b506100f27f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b34801561012757600080fd5b5061009c6106a9565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016148015906101ad57507fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff163314155b156101e4576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610269576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131d6020908152604080832080548251818502810185019093528083527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c949383018282801561035557602002820191906000526020600020906000905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190600401906020826003010492830192600103820291508084116103025790505b505050505090508051600003610397576040517f40d4c9d900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80517f1f931c1c000000000000000000000000000000000000000000000000000000009082906000906103cc576103cc611935565b60200260200101517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19160361042a576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104356000826108b3565b604051339073ffffffffffffffffffffffffffffffffffffffff8516907f706807c5bad215e3dcb9056c9bcb73bbede85a028c0256ae6ab6d04c7181336090600090a3505050565b6104856109ef565b7f363d25a6b563e4e505e09cc7b49c0772239b412c54b5ffbf5d7c1d77a49f57f260005b81548110156105b7576105af8260000182815481106104ca576104ca611935565b6000918252602090912060029091020154835473ffffffffffffffffffffffffffffffffffffffff9091169084908490811061050857610508611935565b90600052602060002090600202016001018054806020026020016040519081016040528092919081815260200182805480156105a557602002820191906000526020600020906000905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190600401906020826003010492830192600103820291508084116105525790505b5050505050610a64565b6001016104a9565b50606060005b8381101561066c576105f48585838181106105da576105da611935565b90506020020160208101906105ef9190611883565b610d14565b80519092507f1f931c1c0000000000000000000000000000000000000000000000000000000090839060009061062c5761062c611935565b60200260200101517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191603156105bd576106646000836108b3565b6001016105bd565b50610678826000611733565b60405133907ff5cbf596165cc457b2cd92e8d8450827ee314968160a5696402d75766fc52caf90600090a250505050565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161480159061072657507fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff163314155b1561075d576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f363d25a6b563e4e505e09cc7b49c0772239b412c54b5ffbf5d7c1d77a49f57f26000610788610e14565b905060005b8151811015610883576107dd7f00000000000000000000000000000000000000000000000000000000000000008383815181106107cc576107cc611935565b602002602001015160200151610a64565b826000018282815181106107f3576107f3611935565b602090810291909101810151825460018082018555600094855293839020825160029092020180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909216919091178155818301518051929491936108759392850192910190611757565b50505080600101905061078d565b5060405133907fb8fad2fa0ed7a383e747c309ef2c4391d7b65592a48893e57ccc1fab7079145690600090a25050565b80516000036108ee576040517f7bc5595000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c73ffffffffffffffffffffffffffffffffffffffff83161561095d576040517f79c9df2200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b82518110156109e957600083828151811061097d5761097d611935565b6020908102919091018101517fffffffff00000000000000000000000000000000000000000000000000000000811660009081529185905260409091205490915073ffffffffffffffffffffffffffffffffffffffff166109df848284610fb9565b5050600101610960565b50505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610a62576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b8051600003610a9f576040517f7bc5595000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c73ffffffffffffffffffffffffffffffffffffffff8316610b0d576040517fc68ec83a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166000908152600182016020526040812054906bffffffffffffffffffffffff82169003610b5557610b558285611482565b60005b8351811015610d0d576000848281518110610b7557610b75611935565b6020908102919091018101517fffffffff00000000000000000000000000000000000000000000000000000000811660009081529186905260409091205490915073ffffffffffffffffffffffffffffffffffffffff9081169087168103610c09576040517fa023275d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c14858284610fb9565b7fffffffff000000000000000000000000000000000000000000000000000000008216600081815260208781526040808320805473ffffffffffffffffffffffffffffffffffffffff908116740100000000000000000000000000000000000000006bffffffffffffffffffffffff8c16021782558c168085526001808c0185529285208054938401815585528385206008840401805463ffffffff60079095166004026101000a948502191660e08a901c94909402939093179092559390925287905281547fffffffffffffffffffffffff000000000000000000000000000000000000000016179055505060019182019101610b58565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff811660009081527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131d602090815260409182902080548351818402810184019094528084526060937fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c9390929190830182828015610e0757602002820191906000526020600020906000905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526020019060040190602082600301049283019260010382029150808411610db45790505b5050505050915050919050565b60606000610e206114f8565b905060018151610e309190611964565b67ffffffffffffffff811115610e4857610e486119a4565b604051908082528060200260200182016040528015610e8e57816020015b604080518082019091526000815260606020820152815260200190600190039081610e665790505b5091506000805b8251811015610fb3577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16838281518110610ee757610ee7611935565b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff1614610fab57828181518110610f2057610f20611935565b602002602001015160000151848381518110610f3e57610f3e611935565b602090810291909101015173ffffffffffffffffffffffffffffffffffffffff90911690528251839082908110610f7757610f77611935565b602002602001015160200151848381518110610f9557610f95611935565b6020026020010151602001819052508160010191505b600101610e95565b50505090565b73ffffffffffffffffffffffffffffffffffffffff8216611006576040517fa9ad62f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff831603611055576040517fc3c5ec3700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fffffffff0000000000000000000000000000000000000000000000000000000081166000908152602084815260408083205473ffffffffffffffffffffffffffffffffffffffff86168452600180880190935290832054740100000000000000000000000000000000000000009091046bffffffffffffffffffffffff1692916110df91611964565b90508082146112265773ffffffffffffffffffffffffffffffffffffffff84166000908152600186016020526040812080548390811061112157611121611935565b6000918252602080832060088304015473ffffffffffffffffffffffffffffffffffffffff8916845260018a019091526040909220805460079092166004026101000a90920460e01b92508291908590811061117f5761117f611935565b600091825260208083206008830401805463ffffffff60079094166004026101000a938402191660e09590951c929092029390931790557fffffffff0000000000000000000000000000000000000000000000000000000092909216825286905260409020805473ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000006bffffffffffffffffffffffff8516021790555b73ffffffffffffffffffffffffffffffffffffffff84166000908152600186016020526040902080548061125c5761125c6119d3565b6000828152602080822060087fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90940193840401805463ffffffff600460078716026101000a0219169055919092557fffffffff000000000000000000000000000000000000000000000000000000008516825286905260408120819055819003610d0d5760028501546000906112f590600190611964565b73ffffffffffffffffffffffffffffffffffffffff861660009081526001808901602052604090912001549091508082146113e357600087600201838154811061134157611341611935565b60009182526020909120015460028901805473ffffffffffffffffffffffffffffffffffffffff909216925082918490811061137f5761137f611935565b600091825260208083209190910180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff948516179055929091168152600189810190925260409020018190555b866002018054806113f6576113f66119d3565b6000828152602080822083017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905590920190925573ffffffffffffffffffffffffffffffffffffffff88168252600189810190915260408220015550505050505050565b61148b816116f2565b60028201805473ffffffffffffffffffffffffffffffffffffffff90921660008181526001948501602090815260408220860185905594840183559182529290200180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169091179055565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131e546060907fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c908067ffffffffffffffff811115611558576115586119a4565b60405190808252806020026020018201604052801561159e57816020015b6040805180820190915260008152606060208201528152602001906001900390816115765790505b50925060005b81811015610fb35760008360020182815481106115c3576115c3611935565b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508085838151811061160357611603611935565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff92831690529082166000908152600186018252604090819020805482518185028101850190935280835291929091908301828280156116c457602002820191906000526020600020906000905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190600401906020826003010492830192600103820291508084116116715790505b50505050508583815181106116db576116db611935565b6020908102919091018101510152506001016115a4565b803b600081900361172f576040517fe350060000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b50805460008255600202906000526020600020908101906117549190611803565b50565b828054828255906000526020600020906007016008900481019282156117f35791602002820160005b838211156117c157835183826101000a81548163ffffffff021916908360e01c02179055509260200192600401602081600301049283019260010302611780565b80156117f15782816101000a81549063ffffffff02191690556004016020816003010492830192600103026117c1565b505b506117ff929150611849565b5090565b808211156117ff5780547fffffffffffffffffffffffff00000000000000000000000000000000000000001681556000611840600183018261185e565b50600201611803565b5b808211156117ff576000815560010161184a565b5080546000825560070160089004906000526020600020908101906117549190611849565b60006020828403121561189557600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146118b957600080fd5b9392505050565b600080602083850312156118d357600080fd5b823567ffffffffffffffff808211156118eb57600080fd5b818501915085601f8301126118ff57600080fd5b81358181111561190e57600080fd5b8660208260051b850101111561192357600080fd5b60209290920196919550909350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b8181038181111561199e577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea26469706673582212201eefa203025407576e20399247c0354c04591119202376bf7ac4217950453f4564736f6c63430008110033";

type EmergencyPauseFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EmergencyPauseFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EmergencyPauseFacet__factory extends ContractFactory {
  constructor(...args: EmergencyPauseFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _pauserWallet: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<EmergencyPauseFacet> {
    return super.deploy(
      _pauserWallet,
      overrides || {}
    ) as Promise<EmergencyPauseFacet>;
  }
  override getDeployTransaction(
    _pauserWallet: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_pauserWallet, overrides || {});
  }
  override attach(address: string): EmergencyPauseFacet {
    return super.attach(address) as EmergencyPauseFacet;
  }
  override connect(signer: Signer): EmergencyPauseFacet__factory {
    return super.connect(signer) as EmergencyPauseFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EmergencyPauseFacetInterface {
    return new utils.Interface(_abi) as EmergencyPauseFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EmergencyPauseFacet {
    return new Contract(address, _abi, signerOrProvider) as EmergencyPauseFacet;
  }
}
