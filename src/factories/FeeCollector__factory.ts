/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { FeeCollector, FeeCollectorInterface } from "../FeeCollector";

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
    name: "batchWithdrawIntegratorFees",
    inputs: [
      {
        name: "tokenAddresses",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "batchWithdrawLifiFees",
    inputs: [
      {
        name: "tokenAddresses",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    outputs: [],
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
    name: "collectNativeFees",
    inputs: [
      {
        name: "integratorFee",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "lifiFee",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "integratorAddress",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "collectTokenFees",
    inputs: [
      {
        name: "tokenAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "integratorFee",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "lifiFee",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "integratorAddress",
        type: "address",
        internalType: "address",
      },
    ],
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
    name: "getLifiTokenBalance",
    inputs: [
      {
        name: "tokenAddress",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getTokenBalance",
    inputs: [
      {
        name: "integratorAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "tokenAddress",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
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
    type: "function",
    name: "withdrawIntegratorFees",
    inputs: [
      {
        name: "tokenAddress",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "withdrawLifiFees",
    inputs: [
      {
        name: "tokenAddress",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "FeesCollected",
    inputs: [
      {
        name: "_token",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_integrator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_integratorFee",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "_lifiFee",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "FeesWithdrawn",
    inputs: [
      {
        name: "_token",
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
      {
        name: "_amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "LiFiFeesWithdrawn",
    inputs: [
      {
        name: "_token",
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
      {
        name: "_amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
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
    name: "InsufficientBalance",
    inputs: [
      {
        name: "required",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "balance",
        type: "uint256",
        internalType: "uint256",
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
    name: "NativeAssetTransferFailed",
    inputs: [],
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
    name: "NoTransferToNullAddress",
    inputs: [],
  },
  {
    type: "error",
    name: "NotEnoughNativeForFees",
    inputs: [],
  },
  {
    type: "error",
    name: "NotPendingOwner",
    inputs: [],
  },
  {
    type: "error",
    name: "NullAddrIsNotAnERC20Token",
    inputs: [],
  },
  {
    type: "error",
    name: "TransferFailure",
    inputs: [],
  },
  {
    type: "error",
    name: "UnAuthorized",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x608060405234801561000f575f80fd5b50604051611bf5380380611bf583398101604081905261002e91610052565b5f80546001600160a01b0319166001600160a01b039290921691909117905561007f565b5f60208284031215610062575f80fd5b81516001600160a01b0381168114610078575f80fd5b9392505050565b611b698061008c5f395ff3fe6080604052600436106100ce575f3560e01c8063bd0b380b1161007c578063e30c397811610057578063e30c39781461022f578063e5d647661461025b578063eedd56e11461027a578063f2fde38b14610299575f80fd5b8063bd0b380b146101de578063c489744b146101fd578063e0cbc5f21461021c575f80fd5b806364bc5be1116100ac57806364bc5be11461015b5780637200b8291461017a5780638da5cb5b1461018e575f80fd5b80630fe97f70146100d257806323452b9c14610126578063461ad4f51461013c575b5f80fd5b3480156100dd575f80fd5b506101136100ec36600461181f565b73ffffffffffffffffffffffffffffffffffffffff165f9081526003602052604090205490565b6040519081526020015b60405180910390f35b348015610131575f80fd5b5061013a6102b8565b005b348015610147575f80fd5b5061013a61015636600461181f565b610381565b348015610166575f80fd5b5061013a61017536600461186c565b610484565b348015610185575f80fd5b5061013a610647565b348015610199575f80fd5b505f546101b99073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161011d565b3480156101e9575f80fd5b5061013a6101f836600461181f565b61072b565b348015610208575f80fd5b5061011361021736600461194a565b6107ed565b61013a61022a36600461197b565b610826565b34801561023a575f80fd5b506001546101b99073ffffffffffffffffffffffffffffffffffffffff1681565b348015610266575f80fd5b5061013a61027536600461186c565b61096e565b348015610285575f80fd5b5061013a6102943660046119ad565b610af2565b3480156102a4575f80fd5b5061013a6102b336600461181f565b610bd9565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610308576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610357576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146103d1576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81165f9081526003602052604081205490819003610402575050565b73ffffffffffffffffffffffffffffffffffffffff82165f90815260036020526040812055610432823383610d35565b604051818152339073ffffffffffffffffffffffffffffffffffffffff8416907fe0ac2a6b74759312758ae3b784411c8e2f3b8bd81fecff40b906d69030af4bfc906020015b60405180910390a35050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146104d4576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80515f805b828110156106415760035f8583815181106104f6576104f66119f0565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205491505f60035f868481518110610550576105506119f0565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055506105b98482815181106105aa576105aa6119f0565b60200260200101513384610d35565b3373ffffffffffffffffffffffffffffffffffffffff168482815181106105e2576105e26119f0565b602002602001015173ffffffffffffffffffffffffffffffffffffffff167fe0ac2a6b74759312758ae3b784411c8e2f3b8bd81fecff40b906d69030af4bfc8460405161063191815260200190565b60405180910390a36001016104d9565b50505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610699576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b335f90815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915281205490819003610767575050565b335f81815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120556107a390839083610d35565b604051818152339073ffffffffffffffffffffffffffffffffffffffff8416907f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa890602001610478565b73ffffffffffffffffffffffffffffffffffffffff8083165f908152600260209081526040808320938516835292905220545b92915050565b6108308284611a4a565b341015610869576040517f840a2adf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81165f908152600260209081526040808320838052909152812080548592906108a8908490611a4a565b90915550505f80805260036020527f3617319a054d772f909f7c479a2cebe5066e836a939412e32403c99029b92eff80548492906108e7908490611a4a565b909155505f90506108f88385611a4a565b6109029034611a5d565b90508015610914576109143382610d6b565b604080518581526020810185905273ffffffffffffffffffffffffffffffffffffffff8416915f917f28a87b6059180e46de5fb9ab35eb043e8fe00ab45afcc7789e3934ecbbcde3ea91015b60405180910390a350505050565b80515f805b8281101561064157335f90815260026020526040812085519091908690849081106109a0576109a06119f0565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549150815f14610aea57335f90815260026020526040812085518290879085908110610a0f57610a0f6119f0565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550610a698482815181106105aa576105aa6119f0565b3373ffffffffffffffffffffffffffffffffffffffff16848281518110610a9257610a926119f0565b602002602001015173ffffffffffffffffffffffffffffffffffffffff167f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa884604051610ae191815260200190565b60405180910390a35b600101610973565b610b0584610b008486611a4a565b610d88565b73ffffffffffffffffffffffffffffffffffffffff8082165f90815260026020908152604080832093881683529290529081208054859290610b48908490611a4a565b909155505073ffffffffffffffffffffffffffffffffffffffff84165f9081526003602052604081208054849290610b81908490611a4a565b9091555050604080518481526020810184905273ffffffffffffffffffffffffffffffffffffffff80841692908716917f28a87b6059180e46de5fb9ab35eb043e8fe00ab45afcc7789e3934ecbbcde3ea9101610960565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610c29576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610c76576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610cc5576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b73ffffffffffffffffffffffffffffffffffffffff831615610d6157610d5c838383610efb565b505050565b610d5c8282611074565b5f385f3884865af1610d845763b12d13eb5f526004601cfd5b5050565b805f03610dc1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610e165780341015610d84576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f9073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610e80573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ea49190611a70565b905081811015610eef576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b610d5c8333308561119a565b73ffffffffffffffffffffffffffffffffffffffff8316610f48576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610f95576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f9073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610fff573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110239190611a70565b905080821115611069576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610ee6565b6106418484846113af565b73ffffffffffffffffffffffffffffffffffffffff82166110c1576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611104576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610ee6565b5f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f811461115a576040519150601f19603f3d011682016040523d82523d5f602084013e61115f565b606091505b5050905080610d5c576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff84166111e7576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611234576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285915f918316906370a0823190602401602060405180830381865afa1580156112a2573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906112c69190611a70565b90506112d482868686611483565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611342573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113669190611a70565b6113709190611a5d565b146113a7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610d5c9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526114e1565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526106419085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611401565b5f611542826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166115ee9092919063ffffffff16565b905080515f14806115625750808060200190518101906115629190611a87565b610d5c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610ee6565b60606115fc84845f85611604565b949350505050565b606082471015611696576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610ee6565b5f808673ffffffffffffffffffffffffffffffffffffffff1685876040516116be9190611ac8565b5f6040518083038185875af1925050503d805f81146116f8576040519150601f19603f3d011682016040523d82523d5f602084013e6116fd565b606091505b509150915061170e87838387611719565b979650505050505050565b606083156117ae5782515f036117a75773ffffffffffffffffffffffffffffffffffffffff85163b6117a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610ee6565b50816115fc565b6115fc83838151156117c35781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ee69190611ae3565b803573ffffffffffffffffffffffffffffffffffffffff8116811461181a575f80fd5b919050565b5f6020828403121561182f575f80fd5b611838826117f7565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b5f602080838503121561187d575f80fd5b823567ffffffffffffffff80821115611894575f80fd5b818501915085601f8301126118a7575f80fd5b8135818111156118b9576118b961183f565b8060051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f830116810181811085821117156118fc576118fc61183f565b604052918252848201925083810185019188831115611919575f80fd5b938501935b8285101561193e5761192f856117f7565b8452938501939285019261191e565b98975050505050505050565b5f806040838503121561195b575f80fd5b611964836117f7565b9150611972602084016117f7565b90509250929050565b5f805f6060848603121561198d575f80fd5b83359250602084013591506119a4604085016117f7565b90509250925092565b5f805f80608085870312156119c0575f80fd5b6119c9856117f7565b935060208501359250604085013591506119e5606086016117f7565b905092959194509250565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b8082018082111561082057610820611a1d565b8181038181111561082057610820611a1d565b5f60208284031215611a80575f80fd5b5051919050565b5f60208284031215611a97575f80fd5b81518015158114611838575f80fd5b5f5b83811015611ac0578181015183820152602001611aa8565b50505f910152565b5f8251611ad9818460208701611aa6565b9190910192915050565b602081525f8251806020840152611b01816040850160208701611aa6565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea26469706673582212200eef524f87a20c96991452d81a7e641862413431a89d849de4ee2577cb1b164764736f6c63430008160033";

type FeeCollectorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FeeCollectorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FeeCollector__factory extends ContractFactory {
  constructor(...args: FeeCollectorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FeeCollector> {
    return super.deploy(_owner, overrides || {}) as Promise<FeeCollector>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  override attach(address: string): FeeCollector {
    return super.attach(address) as FeeCollector;
  }
  override connect(signer: Signer): FeeCollector__factory {
    return super.connect(signer) as FeeCollector__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FeeCollectorInterface {
    return new utils.Interface(_abi) as FeeCollectorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FeeCollector {
    return new Contract(address, _abi, signerOrProvider) as FeeCollector;
  }
}
