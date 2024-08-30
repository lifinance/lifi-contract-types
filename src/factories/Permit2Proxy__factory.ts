/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Permit2Proxy, Permit2ProxyInterface } from "../Permit2Proxy";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_lifiDiamond",
        type: "address",
        internalType: "address",
      },
      {
        name: "_permit2",
        type: "address",
        internalType: "contract ISignatureTransfer",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "LIFI_DIAMOND",
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
    name: "PERMIT2",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract ISignatureTransfer",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "PERMIT_WITH_WITNESS_TYPEHASH",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "WITNESS_TYPEHASH",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "WITNESS_TYPE_STRING",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "callDiamondWithEIP2612Signature",
    inputs: [
      {
        name: "tokenAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "deadline",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "v",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "r",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "s",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "diamondCalldata",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "callDiamondWithPermit2",
    inputs: [
      {
        name: "_diamondCalldata",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "_permit",
        type: "tuple",
        internalType: "struct ISignatureTransfer.PermitTransferFrom",
        components: [
          {
            name: "permitted",
            type: "tuple",
            internalType: "struct ISignatureTransfer.TokenPermissions",
            components: [
              {
                name: "token",
                type: "address",
                internalType: "address",
              },
              {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
              },
            ],
          },
          {
            name: "nonce",
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
        name: "_signature",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "callDiamondWithPermit2Witness",
    inputs: [
      {
        name: "_diamondCalldata",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "_signer",
        type: "address",
        internalType: "address",
      },
      {
        name: "_permit",
        type: "tuple",
        internalType: "struct ISignatureTransfer.PermitTransferFrom",
        components: [
          {
            name: "permitted",
            type: "tuple",
            internalType: "struct ISignatureTransfer.TokenPermissions",
            components: [
              {
                name: "token",
                type: "address",
                internalType: "address",
              },
              {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
              },
            ],
          },
          {
            name: "nonce",
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
        name: "_signature",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "diamondWhitelist",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPermit2MsgHash",
    inputs: [
      {
        name: "_diamondCalldata",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "_assetId",
        type: "address",
        internalType: "address",
      },
      {
        name: "_amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_nonce",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_deadline",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "msgHash",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "error",
    name: "CallToDiamondFailed",
    inputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
  },
  {
    type: "error",
    name: "InvalidAmount",
    inputs: [],
  },
  {
    type: "error",
    name: "NoTransferToNullAddress",
    inputs: [],
  },
  {
    type: "error",
    name: "NullAddrIsNotAValidSpender",
    inputs: [],
  },
  {
    type: "error",
    name: "NullAddrIsNotAnERC20Token",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x60e06040523480156200001157600080fd5b5060405162001ce738038062001ce78339810160408190526200003491620000ca565b6001600160a01b03808316608052811660a0908152604080519182019052606480825262001c8360208301396040518060c001604052806091815260200162001bf2609191396040516020016200008d9291906200013b565b60408051601f19818403018152919052805160209091012060c052506200015c9050565b6001600160a01b0381168114620000c757600080fd5b50565b60008060408385031215620000de57600080fd5b8251620000eb81620000b1565b6020840151909250620000fe81620000b1565b809150509250929050565b6000815160005b818110156200012c576020818501810151868301520162000110565b50600093019283525090919050565b6000620001546200014d838662000109565b8462000109565b949350505050565b60805160a05160c051611a21620001d160003960008181610246015261051d015260008181610212015281816102cd0152818161048a01526106c201526000818160dd0152818161034e01528181610421015281816105f0015281816107b4015281816108e20152610a930152611a216000f3fe6080604052600436106100b15760003560e01c80634561136e116100695780636afdd8501161004e5780636afdd85014610200578063aeef37de14610234578063d7a084731461026857600080fd5b80634561136e146101ad57806356ee2b50146101c057600080fd5b8063156e21521161009a578063156e2152146101295780631608b8031461014b5780632c03ae6a1461017957600080fd5b80630193b9fc146100b6578063020a1f7d146100cb575b600080fd5b6100c96100c436600461143e565b61027b565b005b3480156100d757600080fd5b506100ff7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561013557600080fd5b5061013e6103bd565b6040516101209190611531565b34801561015757600080fd5b5061016b610166366004611574565b6103d9565b604051908152602001610120565b34801561018557600080fd5b5061016b7f02a39cd37978343aced31673756afe3d4c89631c9f974dd8ef54c7065bd8e3cd81565b6100c96101bb3660046115e4565b6105e1565b3480156101cc57600080fd5b506101f06101db366004611679565b60006020819052908152604090205460ff1681565b6040519015158152602001610120565b34801561020c57600080fd5b506100ff7f000000000000000000000000000000000000000000000000000000000000000081565b34801561024057600080fd5b5061016b7f000000000000000000000000000000000000000000000000000000000000000081565b6100c9610276366004611694565b610826565b6040805180820182523081526020808601359082015290517f30f28b7a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016916330f28b7a916103089187913390889088906004016117b3565b600060405180830381600087803b15801561032257600080fd5b505af1158015610336573d6000803e3d6000fd5b50610377925061034c9150506020850185611679565b7f00000000000000000000000000000000000000000000000000000000000000006020860135610946565b6103b685858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610a8e92505050565b5050505050565b6040518060c001604052806091815260200161195b6091913981565b6040805180820190915273ffffffffffffffffffffffffffffffffffffffff85168152602081018490526000908161041082610b60565b9050600060405180604001604052807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020018b8b60405161046b929190611824565b60405180910390208152509050600061048382610be0565b90506105d27f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16633644e5156040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105179190611834565b604080517f0000000000000000000000000000000000000000000000000000000000000000602080830191909152818301889052306060830152608082018c905260a082018b905260c08083018790528351808403909101815260e0830184528051908201207f19010000000000000000000000000000000000000000000000000000000000006101008401526101028301949094526101228083019490945282518083039094018452610142909101909152815191012090565b9b9a5050505050505050505050565b600060405180604001604052807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168152602001888860405161063a929190611824565b6040518091039020815250905060007f02a39cd37978343aced31673756afe3d4c89631c9f974dd8ef54c7065bd8e3cd826040516020016106a8929190918252805173ffffffffffffffffffffffffffffffffffffffff166020808401919091520151604082015260600190565b6040516020818303038152906040528051906020012090507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663137c29fe8660405180604001604052803073ffffffffffffffffffffffffffffffffffffffff168152602001896000016020013581525089856040518060c001604052806091815260200161195b609191398a8a6040518863ffffffff1660e01b815260040161076e979695949392919061184d565b600060405180830381600087803b15801561078857600080fd5b505af115801561079c573d6000803e3d6000fd5b506107dd92506107b29150506020870187611679565b7f00000000000000000000000000000000000000000000000000000000000000006020880135610946565b61081c88888080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610a8e92505050565b5050505050505050565b6040517fd505accf000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018890526064810187905260ff8616608482015260a4810185905260c4810184905273ffffffffffffffffffffffffffffffffffffffff89169063d505accf9060e401600060405180830381600087803b1580156108b857600080fd5b505af11580156108cc573d6000803e3d6000fd5b505050506108dc8833308a610c41565b610907887f000000000000000000000000000000000000000000000000000000000000000089610946565b61081c82828080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610a8e92505050565b73ffffffffffffffffffffffffffffffffffffffff831661096657505050565b73ffffffffffffffffffffffffffffffffffffffff82166109b3576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610a28573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a4c9190611834565b1015610a8957610a5e83836000610e5b565b610a8983837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610e5b565b505050565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163484604051610ad791906118dc565b60006040518083038185875af1925050503d8060008114610b14576040519150601f19603f3d011682016040523d82523d6000602084013e610b19565b606091505b509150915081610a8957806040517f0e971f12000000000000000000000000000000000000000000000000000000008152600401610b579190611531565b60405180910390fd5b8051602080830151604051600093610bc3937f618358ac3db8dc274f0cd8829da7e234bd48cd73c4a740aede1adec9846d06a19391920192835273ffffffffffffffffffffffffffffffffffffffff919091166020830152604082015260600190565b604051602081830303815290604052805190602001209050919050565b60007f02a39cd37978343aced31673756afe3d4c89631c9f974dd8ef54c7065bd8e3cd82604051602001610bc3929190918252805173ffffffffffffffffffffffffffffffffffffffff166020808401919091520151604082015260600190565b73ffffffffffffffffffffffffffffffffffffffff8416610c8e576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610cdb576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610d4c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d709190611834565b9050610d7e8286868661105b565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610dee573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e129190611834565b610e1c91906118f8565b14610e53576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b801580610efb57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610ed5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ef99190611834565b155b610f87576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610b57565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610a899084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526110bf565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526110b99085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610fd9565b50505050565b6000611121826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166111ce9092919063ffffffff16565b90508051600014806111425750808060200190518101906111429190611938565b610a89576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610b57565b60606111dd84846000856111e5565b949350505050565b606082471015611277576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610b57565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516112a091906118dc565b60006040518083038185875af1925050503d80600081146112dd576040519150601f19603f3d011682016040523d82523d6000602084013e6112e2565b606091505b50915091506112f3878383876112fe565b979650505050505050565b6060831561139457825160000361138d5773ffffffffffffffffffffffffffffffffffffffff85163b61138d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610b57565b50816111dd565b6111dd83838151156113a95781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b579190611531565b60008083601f8401126113ef57600080fd5b50813567ffffffffffffffff81111561140757600080fd5b60208301915083602082850101111561141f57600080fd5b9250929050565b60006080828403121561143857600080fd5b50919050565b600080600080600060c0868803121561145657600080fd5b853567ffffffffffffffff8082111561146e57600080fd5b61147a89838a016113dd565b909750955085915061148f8960208a01611426565b945060a08801359150808211156114a557600080fd5b506114b2888289016113dd565b969995985093965092949392505050565b60005b838110156114de5781810151838201526020016114c6565b50506000910152565b600081518084526114ff8160208601602086016114c3565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152600061154460208301846114e7565b9392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461156f57600080fd5b919050565b60008060008060008060a0878903121561158d57600080fd5b863567ffffffffffffffff8111156115a457600080fd5b6115b089828a016113dd565b90975095506115c390506020880161154b565b93506040870135925060608701359150608087013590509295509295509295565b60008060008060008060e087890312156115fd57600080fd5b863567ffffffffffffffff8082111561161557600080fd5b6116218a838b016113dd565b909850965086915061163560208a0161154b565b95506116448a60408b01611426565b945060c089013591508082111561165a57600080fd5b5061166789828a016113dd565b979a9699509497509295939492505050565b60006020828403121561168b57600080fd5b6115448261154b565b60008060008060008060008060e0898b0312156116b057600080fd5b6116b98961154b565b97506020890135965060408901359550606089013560ff811681146116dd57600080fd5b94506080890135935060a0890135925060c089013567ffffffffffffffff81111561170757600080fd5b6117138b828c016113dd565b999c989b5096995094979396929594505050565b73ffffffffffffffffffffffffffffffffffffffff6117458261154b565b1682526020810135602083015260408101356040830152606081013560608301525050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60006101006117c28389611727565b865173ffffffffffffffffffffffffffffffffffffffff166080840152602087015160a084015273ffffffffffffffffffffffffffffffffffffffff861660c08401528060e0840152611818818401858761176a565b98975050505050505050565b8183823760009101908152919050565b60006020828403121561184657600080fd5b5051919050565b600061014061185c838b611727565b885173ffffffffffffffffffffffffffffffffffffffff166080840152602089015160a084015273ffffffffffffffffffffffffffffffffffffffff881660c08401528660e0840152806101008401526118b8818401876114e7565b90508281036101208401526118ce81858761176a565b9a9950505050505050505050565b600082516118ee8184602087016114c3565b9190910192915050565b81810381811115611932577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b92915050565b60006020828403121561194a57600080fd5b8151801515811461154457600080fdfe4c49464943616c6c207769746e657373294c49464943616c6c286164647265737320746f6b656e52656365697665722c61646472657373206469616d6f6e64416464726573732c62797465733332206469616d6f6e6443616c6c646174614861736829546f6b656e5065726d697373696f6e73286164647265737320746f6b656e2c75696e7432353620616d6f756e7429a26469706673582212207d7d4cd669a2781f2e132213d6ee5cf259282e874f7b2b925a24916cad53ebab64736f6c634300081100334c49464943616c6c207769746e657373294c49464943616c6c286164647265737320746f6b656e52656365697665722c61646472657373206469616d6f6e64416464726573732c62797465733332206469616d6f6e6443616c6c646174614861736829546f6b656e5065726d697373696f6e73286164647265737320746f6b656e2c75696e7432353620616d6f756e74295065726d69745769746e6573735472616e7366657246726f6d28546f6b656e5065726d697373696f6e73207065726d69747465642c61646472657373207370656e6465722c75696e74323536206e6f6e63652c75696e7432353620646561646c696e652c";

type Permit2ProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Permit2ProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Permit2Proxy__factory extends ContractFactory {
  constructor(...args: Permit2ProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _lifiDiamond: PromiseOrValue<string>,
    _permit2: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Permit2Proxy> {
    return super.deploy(
      _lifiDiamond,
      _permit2,
      overrides || {}
    ) as Promise<Permit2Proxy>;
  }
  override getDeployTransaction(
    _lifiDiamond: PromiseOrValue<string>,
    _permit2: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_lifiDiamond, _permit2, overrides || {});
  }
  override attach(address: string): Permit2Proxy {
    return super.attach(address) as Permit2Proxy;
  }
  override connect(signer: Signer): Permit2Proxy__factory {
    return super.connect(signer) as Permit2Proxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Permit2ProxyInterface {
    return new utils.Interface(_abi) as Permit2ProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Permit2Proxy {
    return new Contract(address, _abi, signerOrProvider) as Permit2Proxy;
  }
}
