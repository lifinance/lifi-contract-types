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
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
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
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
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
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "payable",
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
    type: "function",
    name: "nextNonce",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "nonce",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "nextNonceAfter",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
      {
        name: "start",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "nonce",
        type: "uint256",
        internalType: "uint256",
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
  "0x60e06040523480156200001157600080fd5b5060405162001f9238038062001f928339810160408190526200003491620000ca565b6001600160a01b03808316608052811660a0908152604080519182019052606480825262001e9d60208301396040518060c001604052806091815260200162001f01609191396040516020016200008d9291906200013b565b60408051601f19818403018152919052805160209091012060c052506200015c9050565b6001600160a01b0381168114620000c757600080fd5b50565b60008060408385031215620000de57600080fd5b8251620000eb81620000b1565b6020840151909250620000fe81620000b1565b809150509250929050565b6000815160005b818110156200012c576020818501810151868301520162000110565b50600093019283525090919050565b6000620001546200014d838662000109565b8462000109565b949350505050565b60805160a05160c051611cc5620001d860003960008181610253015261054501526000818161021f015281816102dd015281816104b2015281816106ec0152610c7501526000818160fc0152818161035f015281816104490152818161061a015281816107de0152818161097c0152610b2f0152611cc56000f3fe6080604052600436106100bc5760003560e01c80632c03ae6a116100745780636afdd8501161004e5780636afdd8501461020d578063aeef37de14610241578063d7a084731461027557600080fd5b80632c03ae6a146101a65780634561136e146101da5780635ebf8b7d146101ed57600080fd5b80630cd55abf116100a55780630cd55abf14610143578063156e2152146101715780631608b8031461018657600080fd5b80630193b9fc146100c1578063020a1f7d146100ea575b600080fd5b6100d46100cf366004611660565b610288565b6040516100e19190611753565b60405180910390f35b3480156100f657600080fd5b5061011e7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100e1565b34801561014f57600080fd5b5061016361015e36600461178f565b6103d1565b6040519081526020016100e1565b34801561017d57600080fd5b506100d46103e5565b34801561019257600080fd5b506101636101a13660046117aa565b610401565b3480156101b257600080fd5b506101637f1ea917e694135c5dcec35ba3e560ebcd12e049eafdf872c23aea926702dfb58c81565b6100d46101e836600461181a565b610609565b3480156101f957600080fd5b506101636102083660046118af565b610853565b34801561021957600080fd5b5061011e7f000000000000000000000000000000000000000000000000000000000000000081565b34801561024d57600080fd5b506101637f000000000000000000000000000000000000000000000000000000000000000081565b6100d46102833660046118d9565b6108bd565b6040805180820182523081526020808601359082015290517f30f28b7a00000000000000000000000000000000000000000000000000000000815260609173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016916330f28b7a91610319918891903390899089906004016119f8565b600060405180830381600087803b15801561033357600080fd5b505af1158015610347573d6000803e3d6000fd5b50610388925061035d915050602086018661178f565b7f000000000000000000000000000000000000000000000000000000000000000060208701356109e0565b6103c786868080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610b2892505050565b9695505050505050565b60006103df82600080610c03565b92915050565b6040518060c0016040528060918152602001611bff6091913981565b6040805180820190915273ffffffffffffffffffffffffffffffffffffffff85168152602081018490526000908161043882610d82565b9050600060405180604001604052807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020018b8b604051610493929190611a69565b6040518091039020815250905060006104ab82610e02565b90506105fa7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16633644e5156040518163ffffffff1660e01b8152600401602060405180830381865afa15801561051b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053f9190611a79565b604080517f0000000000000000000000000000000000000000000000000000000000000000602080830191909152818301889052306060830152608082018c905260a082018b905260c08083018790528351808403909101815260e0830184528051908201207f19010000000000000000000000000000000000000000000000000000000000006101008401526101028301949094526101228083019490945282518083039094018452610142909101909152815191012090565b9b9a5050505050505050505050565b6060600060405180604001604052807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020018989604051610664929190611a69565b6040518091039020815250905060007f1ea917e694135c5dcec35ba3e560ebcd12e049eafdf872c23aea926702dfb58c826040516020016106d2929190918252805173ffffffffffffffffffffffffffffffffffffffff166020808401919091520151604082015260600190565b6040516020818303038152906040528051906020012090507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663137c29fe8760405180604001604052803073ffffffffffffffffffffffffffffffffffffffff1681526020018a600001602001358152508a856040518060c0016040528060918152602001611bff609191398b8b6040518863ffffffff1660e01b81526004016107989796959493929190611a92565b600060405180830381600087803b1580156107b257600080fd5b505af11580156107c6573d6000803e3d6000fd5b5061080792506107dc915050602088018861178f565b7f000000000000000000000000000000000000000000000000000000000000000060208901356109e0565b61084689898080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610b2892505050565b9998505050505050505050565b6000600882901c827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0160ff82160161089b578161088f81611b50565b925050600090506108a9565b806108a581611b8e565b9150505b6108b4858383610c03565b95945050505050565b6040517fd505accf000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018890526064810187905260ff8616608482015260a4810185905260c4810184905260609073ffffffffffffffffffffffffffffffffffffffff8a169063d505accf9060e401600060405180830381600087803b15801561095257600080fd5b505af1158015610966573d6000803e3d6000fd5b505050506109768933308b610e63565b6109a1897f00000000000000000000000000000000000000000000000000000000000000008a6109e0565b61084683838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610b2892505050565b73ffffffffffffffffffffffffffffffffffffffff8316610a0057505050565b73ffffffffffffffffffffffffffffffffffffffff8216610a4d576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610ac2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ae69190611a79565b1015610b2357610af88383600061107d565b610b2383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61107d565b505050565b60606000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163485604051610b739190611bad565b60006040518083038185875af1925050503d8060008114610bb0576040519150601f19603f3d011682016040523d82523d6000602084013e610bb5565b606091505b509150915081610bfc57806040517f0e971f12000000000000000000000000000000000000000000000000000000008152600401610bf39190611753565b60405180910390fd5b9392505050565b60005b6040517f4fe02b4400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85811660048301527effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff851660248301526000917f000000000000000000000000000000000000000000000000000000000000000090911690634fe02b4490604401602060405180830381865afa158015610cbe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ce29190611a79565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8103610d2057610d1484611b50565b93506000925050610c06565b60ff831615610d2f5760ff83161c5b80600116600103610d4d5760011c610d4683611b8e565b9250610d2f565b600884901b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660ff84161795945050505050565b8051602080830151604051600093610de5937f618358ac3db8dc274f0cd8829da7e234bd48cd73c4a740aede1adec9846d06a19391920192835273ffffffffffffffffffffffffffffffffffffffff919091166020830152604082015260600190565b604051602081830303815290604052805190602001209050919050565b60007f1ea917e694135c5dcec35ba3e560ebcd12e049eafdf872c23aea926702dfb58c82604051602001610de5929190918252805173ffffffffffffffffffffffffffffffffffffffff166020808401919091520151604082015260600190565b73ffffffffffffffffffffffffffffffffffffffff8416610eb0576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610efd576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610f6e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f929190611a79565b9050610fa08286868661127d565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611010573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110349190611a79565b61103e9190611bc9565b14611075576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b80158061111d57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156110f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061111b9190611a79565b155b6111a9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610bf3565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610b239084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526112e1565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526112db9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016111fb565b50505050565b6000611343826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166113f09092919063ffffffff16565b90508051600014806113645750808060200190518101906113649190611bdc565b610b23576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610bf3565b60606113ff8484600085611407565b949350505050565b606082471015611499576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610bf3565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516114c29190611bad565b60006040518083038185875af1925050503d80600081146114ff576040519150601f19603f3d011682016040523d82523d6000602084013e611504565b606091505b509150915061151587838387611520565b979650505050505050565b606083156115b65782516000036115af5773ffffffffffffffffffffffffffffffffffffffff85163b6115af576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610bf3565b50816113ff565b6113ff83838151156115cb5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bf39190611753565b60008083601f84011261161157600080fd5b50813567ffffffffffffffff81111561162957600080fd5b60208301915083602082850101111561164157600080fd5b9250929050565b60006080828403121561165a57600080fd5b50919050565b600080600080600060c0868803121561167857600080fd5b853567ffffffffffffffff8082111561169057600080fd5b61169c89838a016115ff565b90975095508591506116b18960208a01611648565b945060a08801359150808211156116c757600080fd5b506116d4888289016115ff565b969995985093965092949392505050565b60005b838110156117005781810151838201526020016116e8565b50506000910152565b600081518084526117218160208601602086016116e5565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000610bfc6020830184611709565b803573ffffffffffffffffffffffffffffffffffffffff8116811461178a57600080fd5b919050565b6000602082840312156117a157600080fd5b610bfc82611766565b60008060008060008060a087890312156117c357600080fd5b863567ffffffffffffffff8111156117da57600080fd5b6117e689828a016115ff565b90975095506117f9905060208801611766565b93506040870135925060608701359150608087013590509295509295509295565b60008060008060008060e0878903121561183357600080fd5b863567ffffffffffffffff8082111561184b57600080fd5b6118578a838b016115ff565b909850965086915061186b60208a01611766565b955061187a8a60408b01611648565b945060c089013591508082111561189057600080fd5b5061189d89828a016115ff565b979a9699509497509295939492505050565b600080604083850312156118c257600080fd5b6118cb83611766565b946020939093013593505050565b60008060008060008060008060e0898b0312156118f557600080fd5b6118fe89611766565b97506020890135965060408901359550606089013560ff8116811461192257600080fd5b94506080890135935060a0890135925060c089013567ffffffffffffffff81111561194c57600080fd5b6119588b828c016115ff565b999c989b5096995094979396929594505050565b73ffffffffffffffffffffffffffffffffffffffff61198a82611766565b1682526020810135602083015260408101356040830152606081013560608301525050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b6000610100611a07838961196c565b865173ffffffffffffffffffffffffffffffffffffffff166080840152602087015160a084015273ffffffffffffffffffffffffffffffffffffffff861660c08401528060e0840152611a5d81840185876119af565b98975050505050505050565b8183823760009101908152919050565b600060208284031215611a8b57600080fd5b5051919050565b6000610140611aa1838b61196c565b885173ffffffffffffffffffffffffffffffffffffffff166080840152602089015160a084015273ffffffffffffffffffffffffffffffffffffffff881660c08401528660e084015280610100840152611afd81840187611709565b9050828103610120840152611b138185876119af565b9a9950505050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808316818103611b8457611b84611b21565b6001019392505050565b600060ff821660ff8103611ba457611ba4611b21565b60010192915050565b60008251611bbf8184602087016116e5565b9190910192915050565b818103818111156103df576103df611b21565b600060208284031215611bee57600080fd5b81518015158114610bfc57600080fdfe4c69466943616c6c207769746e657373294c69466943616c6c286164647265737320746f6b656e52656365697665722c61646472657373206469616d6f6e64416464726573732c62797465733332206469616d6f6e6443616c6c646174614861736829546f6b656e5065726d697373696f6e73286164647265737320746f6b656e2c75696e7432353620616d6f756e7429a2646970667358221220046d4a0304e8abadf5d1b16521d7beb206319fd8abc5842b6376ad1f7274ef5e64736f6c634300081100335065726d69745769746e6573735472616e7366657246726f6d28546f6b656e5065726d697373696f6e73207065726d69747465642c61646472657373207370656e6465722c75696e74323536206e6f6e63652c75696e7432353620646561646c696e652c4c69466943616c6c207769746e657373294c69466943616c6c286164647265737320746f6b656e52656365697665722c61646472657373206469616d6f6e64416464726573732c62797465733332206469616d6f6e6443616c6c646174614861736829546f6b656e5065726d697373696f6e73286164647265737320746f6b656e2c75696e7432353620616d6f756e7429";

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
