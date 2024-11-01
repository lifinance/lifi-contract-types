/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  CalldataVerificationFacet,
  CalldataVerificationFacetInterface,
} from "../CalldataVerificationFacet";

const _abi = [
  {
    type: "function",
    name: "extractBridgeData",
    inputs: [
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "bridgeData",
        type: "tuple",
        internalType: "struct ILiFi.BridgeData",
        components: [
          {
            name: "transactionId",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "bridge",
            type: "string",
            internalType: "string",
          },
          {
            name: "integrator",
            type: "string",
            internalType: "string",
          },
          {
            name: "referrer",
            type: "address",
            internalType: "address",
          },
          {
            name: "sendingAssetId",
            type: "address",
            internalType: "address",
          },
          {
            name: "receiver",
            type: "address",
            internalType: "address",
          },
          {
            name: "minAmount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "destinationChainId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "hasSourceSwaps",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "hasDestinationCall",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "extractData",
    inputs: [
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "bridgeData",
        type: "tuple",
        internalType: "struct ILiFi.BridgeData",
        components: [
          {
            name: "transactionId",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "bridge",
            type: "string",
            internalType: "string",
          },
          {
            name: "integrator",
            type: "string",
            internalType: "string",
          },
          {
            name: "referrer",
            type: "address",
            internalType: "address",
          },
          {
            name: "sendingAssetId",
            type: "address",
            internalType: "address",
          },
          {
            name: "receiver",
            type: "address",
            internalType: "address",
          },
          {
            name: "minAmount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "destinationChainId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "hasSourceSwaps",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "hasDestinationCall",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
      {
        name: "swapData",
        type: "tuple[]",
        internalType: "struct LibSwap.SwapData[]",
        components: [
          {
            name: "callTo",
            type: "address",
            internalType: "address",
          },
          {
            name: "approveTo",
            type: "address",
            internalType: "address",
          },
          {
            name: "sendingAssetId",
            type: "address",
            internalType: "address",
          },
          {
            name: "receivingAssetId",
            type: "address",
            internalType: "address",
          },
          {
            name: "fromAmount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "callData",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "requiresDeposit",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "extractGenericSwapParameters",
    inputs: [
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "sendingAssetId",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "receiver",
        type: "address",
        internalType: "address",
      },
      {
        name: "receivingAssetId",
        type: "address",
        internalType: "address",
      },
      {
        name: "receivingAmount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "extractMainParameters",
    inputs: [
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "bridge",
        type: "string",
        internalType: "string",
      },
      {
        name: "sendingAssetId",
        type: "address",
        internalType: "address",
      },
      {
        name: "receiver",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "destinationChainId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "hasSourceSwaps",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "hasDestinationCall",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "extractNonEVMAddress",
    inputs: [
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "nonEVMAddress",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "extractSwapData",
    inputs: [
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "swapData",
        type: "tuple[]",
        internalType: "struct LibSwap.SwapData[]",
        components: [
          {
            name: "callTo",
            type: "address",
            internalType: "address",
          },
          {
            name: "approveTo",
            type: "address",
            internalType: "address",
          },
          {
            name: "sendingAssetId",
            type: "address",
            internalType: "address",
          },
          {
            name: "receivingAssetId",
            type: "address",
            internalType: "address",
          },
          {
            name: "fromAmount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "callData",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "requiresDeposit",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "validateCalldata",
    inputs: [
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "bridge",
        type: "string",
        internalType: "string",
      },
      {
        name: "sendingAssetId",
        type: "address",
        internalType: "address",
      },
      {
        name: "receiver",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "destinationChainId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "hasSourceSwaps",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "hasDestinationCall",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [
      {
        name: "isValid",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "validateDestinationCalldata",
    inputs: [
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "callTo",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "dstCalldata",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "isValid",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "error",
    name: "SliceOutOfBounds",
    inputs: [],
  },
  {
    type: "error",
    name: "SliceOverflow",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50612490806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063d53482cf1161005b578063d53482cf14610152578063df1c3a5b14610175578063ee0aa32014610196578063f58ae2ce146101bc57600080fd5b8063070e81f11461008d578063103c5200146100b65780637f99d7af146100d7578063c318eeda146100f7575b600080fd5b6100a061009b3660046110c5565b6101cf565b6040516100ad9190611241565b60405180910390f35b6100c96100c43660046110c5565b6101e2565b6040516100ad929190611349565b6100ea6100e53660046110c5565b61025d565b6040516100ad9190611377565b61010a6101053660046110c5565b6102b9565b6040805173ffffffffffffffffffffffffffffffffffffffff96871681526020810195909552928516928401929092529092166060820152608081019190915260a0016100ad565b6101656101603660046113d8565b610431565b60405190151581526020016100ad565b6101886101833660046110c5565b6106c2565b6040519081526020016100ad565b6101a96101a43660046110c5565b6107bb565b6040516100ad97969594939291906114a7565b6101656101ca366004611505565b610876565b60606101db8383610d81565b9392505050565b604080516101408101825260008082526060602083018190529282018390528282018190526080820181905260a0820181905260c0820181905260e0820181905261010082018190526101208201529061023c8484610e53565b915081610100015115610256576102538484610d81565b90505b9250929050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091526101db8383610e53565b60008060008060006060600088888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509394507fd6a4bc50000000000000000000000000000000000000000000000000000000009361032e93506004925090508b8d61159f565b610337916115c9565b7fffffffff00000000000000000000000000000000000000000000000000000000160361037b5761036b886004818c61159f565b81019061037891906117bd565b90505b610395600480835161038d9190611829565b839190610f69565b8060200190518101906103a89190611a02565b8051929a50909750955085935060009250151590506103c9576103c9611ab0565b6020026020010151604001519650816000815181106103ea576103ea611ab0565b602002602001015160800151955081600183516104079190611829565b8151811061041757610417611ab0565b602002602001015160600151935050509295509295909350565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261048c8c8c6107bb565b1515610120880152151561010087015260e086015260c085015273ffffffffffffffffffffffffffffffffffffffff90811660a0850152166080830152602080830191909152604080516000815291820180825282519020916104f3918d918d9101611adf565b60405160208183030381529060405280519060200120148061056657508989604051602001610523929190611adf565b60405160208183030381529060405280519060200120816020015160405160200161054e9190611aef565b60405160208183030381529060405280519060200120145b80156105c0575073ffffffffffffffffffffffffffffffffffffffff80891614806105c057508773ffffffffffffffffffffffffffffffffffffffff16816080015173ffffffffffffffffffffffffffffffffffffffff16145b801561061a575073ffffffffffffffffffffffffffffffffffffffff808816148061061a57508673ffffffffffffffffffffffffffffffffffffffff168160a0015173ffffffffffffffffffffffffffffffffffffffff16145b801561065257507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8614806106525750858160c00151145b801561068a57507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff85148061068a5750848160e00151145b801561069e57508315158161010001511515145b80156106b257508215158161012001511515145b9c9b505050505050505050505050565b60008083838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525093945061070a9250879150869050610e53565b90507fd6a4bc500000000000000000000000000000000000000000000000000000000061073b60046000878961159f565b610744916115c9565b7fffffffff00000000000000000000000000000000000000000000000000000000160361078857610778846004818861159f565b81019061078591906117bd565b91505b806101000151156107a557606482015182016024015192506107b3565b604482015182016024015192505b505092915050565b606060008060008060008060006107d28a8a610e53565b9050806101000151156108355760006107eb8b8b610d81565b90508060008151811061080057610800611ab0565b60200260200101516040015197508060008151811061082157610821611ab0565b602002602001015160800151955050610844565b806080015196508060c0015194505b602081015160a082015160e083015161010084015161012090940151929d999c50909a50959850949690955092505050565b60008087878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509394507fd6a4bc5000000000000000000000000000000000000000000000000000000000936108e293506004925090508a8c61159f565b6108eb916115c9565b7fffffffff00000000000000000000000000000000000000000000000000000000160361092f5761091f876004818b61159f565b81019061092c91906117bd565b90505b6000818060200190518101906109459190611b0b565b90507f72366cd3000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610a375760006109ac60048085516109a49190611829565b859190610f69565b8060200190518101906109bf9190611ce6565b91505080600001518051906020012086866040516109de929190611adf565b6040518091039020148015610a2d5750602081015173ffffffffffffffffffffffffffffffffffffffff16610a15888a018a611d4a565b73ffffffffffffffffffffffffffffffffffffffff16145b9350505050610d77565b7f7c0ce6e9000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610ac7576000610a9460048085516109a49190611829565b806020019051810190610aa79190611d67565b9250505080600001518051906020012086866040516109de929190611adf565b7f41e15319000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610b95576000610b2460048085516109a49190611829565b806020019051810190610b379190611ea2565b9150508060e00151805190602001208686604051610b56929190611adf565b6040518091039020148015610a2d57508060c00151805190602001208888604051610b82929190611adf565b6040518091039020149350505050610d77565b7f12e879e7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610c25576000610bf260048085516109a49190611829565b806020019051810190610c059190611efc565b925050508060e00151805190602001208686604051610b56929190611adf565b7ffaf6a213000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610ce0576000610c8260048085516109a49190611829565b806020019051810190610c95919061204d565b9150508060600151805190602001208686604051610cb4929190611adf565b6040518091039020148015610a2d57508060400151805190602001208888604051610b82929190611adf565b7f4f93ad26000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610d70576000610d3d60048085516109a49190611829565b806020019051810190610d5091906120a7565b925050508060600151805190602001208686604051610cb4929190611adf565b6000925050505b9695505050505050565b60607fd6a4bc5000000000000000000000000000000000000000000000000000000000610db260046000858761159f565b610dbb916115c9565b7fffffffff000000000000000000000000000000000000000000000000000000001603610e2f576000610df1836004818761159f565b810190610dfe91906117bd565b9050610e12600480835161038d9190611829565b806020019051810190610e259190612125565b9250610e4d915050565b610e3c826004818661159f565b810190610e49919061225a565b9150505b92915050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091527fd6a4bc5000000000000000000000000000000000000000000000000000000000610ed460046000858761159f565b610edd916115c9565b7fffffffff000000000000000000000000000000000000000000000000000000001603610f4f576000610f13836004818761159f565b810190610f2091906117bd565b9050610f34600480835161038d9190611829565b806020019051810190610f4791906123dd565b915050610e4d565b610f5c826004818661159f565b8101906101db9190612412565b606081610f7781601f612447565b1015610faf576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fb98284612447565b84511015610ff3576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611012576040519150600082526020820160405261107a565b6040519150601f8416801560200281840101858101878315602002848b0101015b8183101561104b578051835260209283019201611033565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b60008083601f84011261109557600080fd5b50813567ffffffffffffffff8111156110ad57600080fd5b60208301915083602082850101111561025657600080fd5b600080602083850312156110d857600080fd5b823567ffffffffffffffff8111156110ef57600080fd5b6110fb85828601611083565b90969095509350505050565b60005b8381101561112257818101518382015260200161110a565b50506000910152565b60008151808452611143816020860160208601611107565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600081518084526020808501808196508360051b8101915082860160005b858110156112345782840389528151805173ffffffffffffffffffffffffffffffffffffffff908116865286820151811687870152604080830151821690870152606080830151909116908601526080808201519086015260a08082015160e082880181905291906112078389018261112b565b9250505060c08083015192506112208188018415159052565b509986019994505090840190600101611193565b5091979650505050505050565b6020815260006101db6020830184611175565b60006101408251845260208301518160208601526112748286018261112b565b9150506040830151848203604086015261128e828261112b565b91505060608301516112b8606086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060808301516112e0608086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060a083015161130860a086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060c083015160c085015260e083015160e0850152610100808401516113318287018215159052565b50506101209283015115159390920192909252919050565b60408152600061135c6040830185611254565b828103602084015261136e8185611175565b95945050505050565b6020815260006101db6020830184611254565b73ffffffffffffffffffffffffffffffffffffffff811681146113ac57600080fd5b50565b80356113ba8161138a565b919050565b80151581146113ac57600080fd5b80356113ba816113bf565b6000806000806000806000806000806101008b8d0312156113f857600080fd5b8a3567ffffffffffffffff8082111561141057600080fd5b61141c8e838f01611083565b909c509a5060208d013591508082111561143557600080fd5b506114428d828e01611083565b90995097505060408b01356114568161138a565b955060608b01356114668161138a565b945060808b0135935060a08b0135925060c08b0135611484816113bf565b915060e08b0135611494816113bf565b809150509295989b9194979a5092959850565b60e0815260006114ba60e083018a61112b565b73ffffffffffffffffffffffffffffffffffffffff988916602084015296909716604082015260608101949094526080840192909252151560a0830152151560c09091015292915050565b6000806000806000806060878903121561151e57600080fd5b863567ffffffffffffffff8082111561153657600080fd5b6115428a838b01611083565b9098509650602089013591508082111561155b57600080fd5b6115678a838b01611083565b9096509450604089013591508082111561158057600080fd5b5061158d89828a01611083565b979a9699509497509295939492505050565b600080858511156115af57600080fd5b838611156115bc57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156107b35760049490940360031b84901b1690921692915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff811182821017156116615761166161160f565b60405290565b604051610140810167ffffffffffffffff811182821017156116615761166161160f565b604051610100810167ffffffffffffffff811182821017156116615761166161160f565b60405160c0810167ffffffffffffffff811182821017156116615761166161160f565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156117195761171961160f565b604052919050565b600067ffffffffffffffff82111561173b5761173b61160f565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261177857600080fd5b813561178b61178682611721565b6116d2565b8181528460208386010111156117a057600080fd5b816020850160208301376000918101602001919091529392505050565b6000602082840312156117cf57600080fd5b813567ffffffffffffffff8111156117e657600080fd5b6117f284828501611767565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610e4d57610e4d6117fa565b600082601f83011261184d57600080fd5b815161185b61178682611721565b81815284602083860101111561187057600080fd5b6117f2826020830160208701611107565b80516113ba8161138a565b600067ffffffffffffffff8211156118a6576118a661160f565b5060051b60200190565b80516113ba816113bf565b600082601f8301126118cc57600080fd5b815160206118dc6117868361188c565b82815260059290921b840181019181810190868411156118fb57600080fd5b8286015b848110156119f757805167ffffffffffffffff808211156119205760008081fd5b818901915060e0807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848d030112156119595760008081fd5b61196161163e565b61196c888501611881565b8152604061197b818601611881565b89830152606061198c818701611881565b828401526080915061199f828701611881565b818401525060a0808601518284015260c0915081860151858111156119c45760008081fd5b6119d28f8c838a010161183c565b8285015250506119e38386016118b0565b9082015286525050509183019183016118ff565b509695505050505050565b60008060008060008060c08789031215611a1b57600080fd5b86519550602087015167ffffffffffffffff80821115611a3a57600080fd5b611a468a838b0161183c565b96506040890151915080821115611a5c57600080fd5b611a688a838b0161183c565b955060608901519150611a7a8261138a565b608089015160a08a0151929550935080821115611a9657600080fd5b50611aa389828a016118bb565b9150509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b8183823760009101908152919050565b60008251611b01818460208701611107565b9190910192915050565b600060208284031215611b1d57600080fd5b81517fffffffff00000000000000000000000000000000000000000000000000000000811681146101db57600080fd5b60006101408284031215611b6057600080fd5b611b68611667565b905081518152602082015167ffffffffffffffff80821115611b8957600080fd5b611b958583860161183c565b60208401526040840151915080821115611bae57600080fd5b50611bbb8482850161183c565b604083015250611bcd60608301611881565b6060820152611bde60808301611881565b6080820152611bef60a08301611881565b60a082015260c082015160c082015260e082015160e0820152610100611c168184016118b0565b90820152610120611c288382016118b0565b9082015292915050565b805163ffffffff811681146113ba57600080fd5b600060e08284031215611c5857600080fd5b611c6061163e565b9050815167ffffffffffffffff811115611c7957600080fd5b611c858482850161183c565b825250611c9460208301611881565b60208201526040820151604082015260608201516060820152611cb960808301611881565b6080820152611cca60a08301611c32565b60a0820152611cdb60c083016118b0565b60c082015292915050565b60008060408385031215611cf957600080fd5b825167ffffffffffffffff80821115611d1157600080fd5b611d1d86838701611b4d565b93506020850151915080821115611d3357600080fd5b50611d4085828601611c46565b9150509250929050565b600060208284031215611d5c57600080fd5b81356101db8161138a565b600080600060608486031215611d7c57600080fd5b835167ffffffffffffffff80821115611d9457600080fd5b611da087838801611b4d565b94506020860151915080821115611db657600080fd5b611dc2878388016118bb565b93506040860151915080821115611dd857600080fd5b50611de586828701611c46565b9150509250925092565b60006101008284031215611e0257600080fd5b611e0a61168b565b90508151815260208201516020820152604082015160408201526060820151606082015260808201516080820152611e4460a08301611881565b60a082015260c082015167ffffffffffffffff80821115611e6457600080fd5b611e708583860161183c565b60c084015260e0840151915080821115611e8957600080fd5b50611e968482850161183c565b60e08301525092915050565b60008060408385031215611eb557600080fd5b825167ffffffffffffffff80821115611ecd57600080fd5b611ed986838701611b4d565b93506020850151915080821115611eef57600080fd5b50611d4085828601611def565b600080600060608486031215611f1157600080fd5b835167ffffffffffffffff80821115611f2957600080fd5b611f3587838801611b4d565b94506020860151915080821115611f4b57600080fd5b611f57878388016118bb565b93506040860151915080821115611f6d57600080fd5b50611de586828701611def565b805167ffffffffffffffff811681146113ba57600080fd5b8051600781106113ba57600080fd5b600060c08284031215611fb357600080fd5b611fbb6116af565b9050611fc682611c32565b8152611fd460208301611f7a565b6020820152604082015167ffffffffffffffff80821115611ff457600080fd5b6120008583860161183c565b6040840152606084015191508082111561201957600080fd5b506120268482850161183c565b6060830152506080820151608082015261204260a08301611f92565b60a082015292915050565b6000806040838503121561206057600080fd5b825167ffffffffffffffff8082111561207857600080fd5b61208486838701611b4d565b9350602085015191508082111561209a57600080fd5b50611d4085828601611fa1565b6000806000606084860312156120bc57600080fd5b835167ffffffffffffffff808211156120d457600080fd5b6120e087838801611b4d565b945060208601519150808211156120f657600080fd5b612102878388016118bb565b9350604086015191508082111561211857600080fd5b50611de586828701611fa1565b6000806040838503121561213857600080fd5b825167ffffffffffffffff8082111561215057600080fd5b61215c86838701611b4d565b9350602085015191508082111561217257600080fd5b50611d40858286016118bb565b6000610140828403121561219257600080fd5b61219a611667565b905081358152602082013567ffffffffffffffff808211156121bb57600080fd5b6121c785838601611767565b602084015260408401359150808211156121e057600080fd5b506121ed84828501611767565b6040830152506121ff606083016113af565b6060820152612210608083016113af565b608082015261222160a083016113af565b60a082015260c082013560c082015260e082013560e08201526101006122488184016113cd565b90820152610120611c288382016113cd565b6000806040838503121561226d57600080fd5b823567ffffffffffffffff8082111561228557600080fd5b6122918683870161217f565b93506020915081850135818111156122a857600080fd5b8501601f810187136122b957600080fd5b80356122c76117868261188c565b81815260059190911b820184019084810190898311156122e657600080fd5b8584015b838110156123cc5780358681111561230157600080fd5b850160e0818d037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe001121561233557600080fd5b61233d61163e565b6123488983016113af565b8152612356604083016113af565b89820152612366606083016113af565b6040820152612377608083016113af565b606082015260a0820135608082015260c0808301358981111561239a5760008081fd5b6123a88f8c83870101611767565b60a0840152506123ba60e084016113cd565b908201528452509186019186016122ea565b508096505050505050509250929050565b6000602082840312156123ef57600080fd5b815167ffffffffffffffff81111561240657600080fd5b6117f284828501611b4d565b60006020828403121561242457600080fd5b813567ffffffffffffffff81111561243b57600080fd5b6117f28482850161217f565b80820180821115610e4d57610e4d6117fa56fea2646970667358221220aaebec94d705f3f2ac5610225b33282edcf1238133aec301f350fe1e1a2c29d664736f6c63430008110033";

type CalldataVerificationFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CalldataVerificationFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CalldataVerificationFacet__factory extends ContractFactory {
  constructor(...args: CalldataVerificationFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CalldataVerificationFacet> {
    return super.deploy(overrides || {}) as Promise<CalldataVerificationFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CalldataVerificationFacet {
    return super.attach(address) as CalldataVerificationFacet;
  }
  override connect(signer: Signer): CalldataVerificationFacet__factory {
    return super.connect(signer) as CalldataVerificationFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CalldataVerificationFacetInterface {
    return new utils.Interface(_abi) as CalldataVerificationFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CalldataVerificationFacet {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CalldataVerificationFacet;
  }
}
