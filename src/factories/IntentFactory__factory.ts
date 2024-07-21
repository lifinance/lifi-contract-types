/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { IntentFactory, IntentFactoryInterface } from "../IntentFactory";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_owner",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "cancelOwnershipTransfer",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "confirmOwnershipTransfer",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "deployAndExecuteIntent",
    inputs: [
      {
        name: "_initData",
        type: "tuple",
        internalType: "struct IIntent.InitData",
        components: [
          {
            name: "intentId",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "receiver",
            type: "address",
            internalType: "address",
          },
          {
            name: "tokenOut",
            type: "address",
            internalType: "address",
          },
          {
            name: "amountOutMin",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "deadline",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
      {
        name: "_calls",
        type: "tuple[]",
        internalType: "struct IIntent.Call[]",
        components: [
          {
            name: "to",
            type: "address",
            internalType: "address",
          },
          {
            name: "value",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "data",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "deployAndWithdrawAll",
    inputs: [
      {
        name: "_initData",
        type: "tuple",
        internalType: "struct IIntent.InitData",
        components: [
          {
            name: "intentId",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "receiver",
            type: "address",
            internalType: "address",
          },
          {
            name: "tokenOut",
            type: "address",
            internalType: "address",
          },
          {
            name: "amountOutMin",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "deadline",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
      {
        name: "tokens",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getIntentAddress",
    inputs: [
      {
        name: "_initData",
        type: "tuple",
        internalType: "struct IIntent.InitData",
        components: [
          {
            name: "intentId",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "receiver",
            type: "address",
            internalType: "address",
          },
          {
            name: "tokenOut",
            type: "address",
            internalType: "address",
          },
          {
            name: "amountOutMin",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "deadline",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
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
    name: "implementation",
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
    name: "owner",
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
    name: "pendingOwner",
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
    name: "transferOwnership",
    inputs: [
      {
        name: "_newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "OwnershipTransferRequested",
    inputs: [
      {
        name: "_from",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_to",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "NewOwnerMustNotBeSelf",
    inputs: [],
  },
  {
    type: "error",
    name: "NoNullOwner",
    inputs: [],
  },
  {
    type: "error",
    name: "NoPendingOwnershipTransfer",
    inputs: [],
  },
  {
    type: "error",
    name: "NotPendingOwner",
    inputs: [],
  },
  {
    type: "error",
    name: "UnAuthorized",
    inputs: [],
  },
  {
    type: "error",
    name: "Unauthorized",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051611a1e380380611a1e83398101604081905261002f91610092565b600080546001600160a01b0319166001600160a01b03831617905560405161005690610085565b604051809103906000f080158015610072573d6000803e3d6000fd5b506001600160a01b0316608052506100c2565b610cdc80610d4283390190565b6000602082840312156100a457600080fd5b81516001600160a01b03811681146100bb57600080fd5b9392505050565b608051610c506100f260003960008181610119015281816101c70152818161027701526104ac0152610c506000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c80635c60da1b116100765780638da5cb5b1161005b5780638da5cb5b14610143578063e30c397814610163578063f2fde38b1461018357600080fd5b80635c60da1b146101145780637200b8291461013b57600080fd5b806313e10cf8146100a857806315b4d19f146100e457806323452b9c146100f95780632bebb61314610101575b600080fd5b6100bb6100b63660046108ec565b610196565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100f76100f2366004610954565b6101f4565b005b6100f76103b0565b6100f761010f366004610954565b61047a565b6100bb7f000000000000000000000000000000000000000000000000000000000000000081565b6100f76105ac565b6000546100bb9073ffffffffffffffffffffffffffffffffffffffff1681565b6001546100bb9073ffffffffffffffffffffffffffffffffffffffff1681565b6100f76101913660046109d1565b610692565b600080826040516020016101aa91906109ec565b6040516020818303038152906040528051906020012090506101ed7f000000000000000000000000000000000000000000000000000000000000000082306107f0565b9392505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610245576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008360405160200161025891906109ec565b604051602081830303815290604052805190602001209050600061029c7f00000000000000000000000000000000000000000000000000000000000000008361084d565b6040517f0c165e9200000000000000000000000000000000000000000000000000000000815290915073ffffffffffffffffffffffffffffffffffffffff821690630c165e92906102f19088906004016109ec565b600060405180830381600087803b15801561030b57600080fd5b505af115801561031f573d6000803e3d6000fd5b50506040517f3f707e6b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169250633f707e6b91506103779087908790600401610a4c565b600060405180830381600087803b15801561039157600080fd5b505af11580156103a5573d6000803e3d6000fd5b505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610401576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610450576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60008360405160200161048d91906109ec565b60405160208183030381529060405280519060200120905060006104d17f00000000000000000000000000000000000000000000000000000000000000008361084d565b6040517f0c165e9200000000000000000000000000000000000000000000000000000000815290915073ffffffffffffffffffffffffffffffffffffffff821690630c165e92906105269088906004016109ec565b600060405180830381600087803b15801561054057600080fd5b505af1158015610554573d6000803e3d6000fd5b50506040517f6568a27900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169250636568a27991506103779087908790600401610bc1565b60015473ffffffffffffffffffffffffffffffffffffffff163381146105fe576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146106e3576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610730576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82160361077f576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b6000806108378560006c5af43d3d93803e602a57fd5bf36021528160145273602c3d8160093d39f33d3d3d3d363d3d37363d736000526035600c2090506000602152919050565b905061084481858561085b565b95945050505050565b60006101ed6000848461087d565b600060ff60005350603592835260601b60015260155260556000908120915290565b60006c5af43d3d93803e602a57fd5bf36021528260145273602c3d8160093d39f33d3d3d3d363d3d37363d73600052816035600c86f59050806108c85763301164256000526004601cfd5b60006021529392505050565b600060a082840312156108e657600080fd5b50919050565b600060a082840312156108fe57600080fd5b6101ed83836108d4565b60008083601f84011261091a57600080fd5b50813567ffffffffffffffff81111561093257600080fd5b6020830191508360208260051b850101111561094d57600080fd5b9250929050565b600080600060c0848603121561096957600080fd5b61097385856108d4565b925060a084013567ffffffffffffffff81111561098f57600080fd5b61099b86828701610908565b9497909650939450505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146109cc57600080fd5b919050565b6000602082840312156109e357600080fd5b6101ed826109a8565b8135815260a08101610a00602084016109a8565b73ffffffffffffffffffffffffffffffffffffffff808216602085015280610a2a604087016109a8565b1660408501525050606083013560608301526080830135608083015292915050565b60208082528181018390526000906040808401600586901b8501820187855b88811015610bb3577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc088840301845281357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa18b3603018112610acc57600080fd5b8a01606073ffffffffffffffffffffffffffffffffffffffff610aee836109a8565b1685528782013588860152868201357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1833603018112610b2d57600080fd5b90910187810191903567ffffffffffffffff811115610b4b57600080fd5b803603831315610b5a57600080fd5b8188870152808287015260809150808383880137600086820183015295880195601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016909401909301925090850190600101610a6b565b509098975050505050505050565b60208082528181018390526000908460408401835b86811015610c0f5773ffffffffffffffffffffffffffffffffffffffff610bfc846109a8565b1682529183019190830190600101610bd6565b50969550505050505056fea264697066735822122005e8b0ccab8da9470cb8dac2d03c76882b7fa526e7297ad19337eb844fc48a0864736f6c6343000811003360a060405234801561001057600080fd5b5030608052608051610ca66100366000396000818160be01526102580152610ca66000f3fe60806040526004361061005e5760003560e01c80635c60da1b116100435780635c60da1b146100ac5780636568a2791461010a57806379502c551461012a57600080fd5b80630c165e921461006a5780633f707e6b1461008c57600080fd5b3661006557005b600080fd5b34801561007657600080fd5b5061008a6100853660046109c5565b6101d6565b005b34801561009857600080fd5b5061008a6100a7366004610a29565b610388565b3480156100b857600080fd5b506100e07f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561011657600080fd5b5061008a610125366004610a29565b6107dc565b34801561013657600080fd5b5060005460015460025460035460045460055460065460075461017b97969573ffffffffffffffffffffffffffffffffffffffff908116958116941692919060ff1688565b60408051988952602089019790975273ffffffffffffffffffffffffffffffffffffffff9586169688019690965292841660608701529216608085015260a084019190915260c083015260ff1660e082015261010001610101565b806040516020016101e79190610a94565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905280516020909101206001819055600380547fffffffffffffffffffffffff0000000000000000000000000000000000000000163390811790915560009161027e917f000000000000000000000000000000000000000000000000000000000000000091906108a6565b90503073ffffffffffffffffffffffffffffffffffffffff8216146102cf576040517fa86b651200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81356000556102e46040830160208401610af4565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff929092169190911790556103396060830160408401610af4565b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff929092169190911790555060600135600555565b60035473ffffffffffffffffffffffffffffffffffffffff1633146103d9576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60075460ff1615610416576040517f0dc1019700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600780547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905560005b8181101561058e57600083838381811061046057610460610b16565b90506020028101906104729190610b45565b610480906020810190610af4565b73ffffffffffffffffffffffffffffffffffffffff168484848181106104a8576104a8610b16565b90506020028101906104ba9190610b45565b602001358585858181106104d0576104d0610b16565b90506020028101906104e29190610b45565b6104f0906040810190610b83565b6040516104fe929190610be8565b60006040518083038185875af1925050503d806000811461053b576040519150601f19603f3d011682016040523d82523d6000602084013e610540565b606091505b505090508061057b576040517facfdb44400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b508061058681610bf8565b915050610444565b5060045473ffffffffffffffffffffffffffffffffffffffff16158015610672576005544710156105eb576040517f42301c2300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60025461060d9073ffffffffffffffffffffffffffffffffffffffff16610903565b6000546002546004546040805173ffffffffffffffffffffffffffffffffffffffff93841681529290911660208301524782820152517f88cb839d71237099623ebb2cbcf82ff9c18e87784e655c264db8c6d20738d9a59181900360600190a2505050565b600480546040517f70a08231000000000000000000000000000000000000000000000000000000008152309281019290925260009173ffffffffffffffffffffffffffffffffffffffff909116906370a0823190602401602060405180830381865afa1580156106e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061070a9190610c57565b600554909150811015610749576040517f42301c2300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6004546002546107729173ffffffffffffffffffffffffffffffffffffffff9081169116610922565b506000546002546004546040805173ffffffffffffffffffffffffffffffffffffffff938416815292909116602083015281018390527f88cb839d71237099623ebb2cbcf82ff9c18e87784e655c264db8c6d20738d9a59060600160405180910390a2505b505050565b60005b818110156107d75760008383838181106107fb576107fb610b16565b90506020020160208101906108109190610af4565b73ffffffffffffffffffffffffffffffffffffffff16036108555760025461084d9073ffffffffffffffffffffffffffffffffffffffff16610903565b6001016107df565b61089d83838381811061086a5761086a610b16565b905060200201602081019061087f9190610af4565b60025473ffffffffffffffffffffffffffffffffffffffff16610922565b506001016107df565b6000806108ed8560006c5af43d3d93803e602a57fd5bf36021528160145273602c3d8160093d39f33d3d3d3d363d3d37363d736000526035600c2090506000602152919050565b90506108fa8185856109a3565b95945050505050565b60003860003847855af161091f5763b12d13eb6000526004601cfd5b50565b60006370a0823160005230602052602060346024601c865afa601f3d1116610952576390b8ec186000526004601cfd5b8160145260345190506fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716610998576390b8ec186000526004601cfd5b600060345292915050565b600060ff60005350603592835260601b60015260155260556000908120915290565b600060a082840312156109d757600080fd5b50919050565b60008083601f8401126109ef57600080fd5b50813567ffffffffffffffff811115610a0757600080fd5b6020830191508360208260051b8501011115610a2257600080fd5b9250929050565b60008060208385031215610a3c57600080fd5b823567ffffffffffffffff811115610a5357600080fd5b610a5f858286016109dd565b90969095509350505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610a8f57600080fd5b919050565b8135815260a08101610aa860208401610a6b565b73ffffffffffffffffffffffffffffffffffffffff808216602085015280610ad260408701610a6b565b1660408501525050606083013560608301526080830135608083015292915050565b600060208284031215610b0657600080fd5b610b0f82610a6b565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa1833603018112610b7957600080fd5b9190910192915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112610bb857600080fd5b83018035915067ffffffffffffffff821115610bd357600080fd5b602001915036819003821315610a2257600080fd5b8183823760009101908152919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610c50577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b600060208284031215610c6957600080fd5b505191905056fea264697066735822122092805e41591eb4e9792161657dfec1453e64add872d1b3f8cdb15f46b9b93c6e64736f6c63430008110033";

type IntentFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: IntentFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class IntentFactory__factory extends ContractFactory {
  constructor(...args: IntentFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<IntentFactory> {
    return super.deploy(_owner, overrides || {}) as Promise<IntentFactory>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  override attach(address: string): IntentFactory {
    return super.attach(address) as IntentFactory;
  }
  override connect(signer: Signer): IntentFactory__factory {
    return super.connect(signer) as IntentFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IntentFactoryInterface {
    return new utils.Interface(_abi) as IntentFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IntentFactory {
    return new Contract(address, _abi, signerOrProvider) as IntentFactory;
  }
}
