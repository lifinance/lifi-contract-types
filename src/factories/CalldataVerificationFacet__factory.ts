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
  "0x608060405234801561001057600080fd5b506127a9806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063d53482cf1161005b578063d53482cf14610152578063df1c3a5b14610175578063ee0aa32014610196578063f58ae2ce146101bc57600080fd5b8063070e81f11461008d578063103c5200146100b65780637f99d7af146100d7578063c318eeda146100f7575b600080fd5b6100a061009b36600461123e565b6101cf565b6040516100ad91906113db565b60405180910390f35b6100c96100c436600461123e565b6101e2565b6040516100ad9291906114e3565b6100ea6100e536600461123e565b61025d565b6040516100ad9190611511565b61010a61010536600461123e565b6102b9565b6040805173ffffffffffffffffffffffffffffffffffffffff96871681526020810195909552928516928401929092529092166060820152608081019190915260a0016100ad565b610165610160366004611572565b610431565b60405190151581526020016100ad565b61018861018336600461123e565b6106c2565b6040519081526020016100ad565b6101a96101a436600461123e565b6107bb565b6040516100ad9796959493929190611641565b6101656101ca36600461169f565b610876565b60606101db8383610efa565b9392505050565b604080516101408101825260008082526060602083018190529282018390528282018190526080820181905260a0820181905260c0820181905260e0820181905261010082018190526101208201529061023c8484610fcc565b915081610100015115610256576102538484610efa565b90505b9250929050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091526101db8383610fcc565b60008060008060006060600088888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509394507fd6a4bc50000000000000000000000000000000000000000000000000000000009361032e93506004925090508b8d611739565b61033791611763565b7fffffffff00000000000000000000000000000000000000000000000000000000160361037b5761036b886004818c611739565b8101906103789190611957565b90505b610395600480835161038d91906119c3565b8391906110e2565b8060200190518101906103a89190611b9c565b8051929a50909750955085935060009250151590506103c9576103c9611c4a565b6020026020010151604001519650816000815181106103ea576103ea611c4a565b6020026020010151608001519550816001835161040791906119c3565b8151811061041757610417611c4a565b602002602001015160600151935050509295509295909350565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261048c8c8c6107bb565b1515610120880152151561010087015260e086015260c085015273ffffffffffffffffffffffffffffffffffffffff90811660a0850152166080830152602080830191909152604080516000815291820180825282519020916104f3918d918d9101611c79565b60405160208183030381529060405280519060200120148061056657508989604051602001610523929190611c79565b60405160208183030381529060405280519060200120816020015160405160200161054e9190611c89565b60405160208183030381529060405280519060200120145b80156105c0575073ffffffffffffffffffffffffffffffffffffffff80891614806105c057508773ffffffffffffffffffffffffffffffffffffffff16816080015173ffffffffffffffffffffffffffffffffffffffff16145b801561061a575073ffffffffffffffffffffffffffffffffffffffff808816148061061a57508673ffffffffffffffffffffffffffffffffffffffff168160a0015173ffffffffffffffffffffffffffffffffffffffff16145b801561065257507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8614806106525750858160c00151145b801561068a57507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff85148061068a5750848160e00151145b801561069e57508315158161010001511515145b80156106b257508215158161012001511515145b9c9b505050505050505050505050565b60008083838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525093945061070a9250879150869050610fcc565b90507fd6a4bc500000000000000000000000000000000000000000000000000000000061073b600460008789611739565b61074491611763565b7fffffffff000000000000000000000000000000000000000000000000000000001603610788576107788460048188611739565b8101906107859190611957565b91505b806101000151156107a557606482015182016024015192506107b3565b604482015182016024015192505b505092915050565b606060008060008060008060006107d28a8a610fcc565b9050806101000151156108355760006107eb8b8b610efa565b90508060008151811061080057610800611c4a565b60200260200101516040015197508060008151811061082157610821611c4a565b602002602001015160800151955050610844565b806080015196508060c0015194505b602081015160a082015160e083015161010084015161012090940151929d999c50909a50959850949690955092505050565b60008087878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509394507fd6a4bc5000000000000000000000000000000000000000000000000000000000936108e293506004925090508a8c611739565b6108eb91611763565b7fffffffff00000000000000000000000000000000000000000000000000000000160361092f5761091f876004818b611739565b81019061092c9190611957565b90505b6000818060200190518101906109459190611ca5565b90507f72366cd3000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610a375760006109ac60048085516109a491906119c3565b8591906110e2565b8060200190518101906109bf9190611e80565b91505080600001518051906020012086866040516109de929190611c79565b6040518091039020148015610a2d5750602081015173ffffffffffffffffffffffffffffffffffffffff16610a15888a018a611ee4565b73ffffffffffffffffffffffffffffffffffffffff16145b9350505050610ef0565b7f7c0ce6e9000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610ac7576000610a9460048085516109a491906119c3565b806020019051810190610aa79190611f01565b9250505080600001518051906020012086866040516109de929190611c79565b7f41e15319000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610b95576000610b2460048085516109a491906119c3565b806020019051810190610b37919061203c565b9150508060e00151805190602001208686604051610b56929190611c79565b6040518091039020148015610a2d57508060c00151805190602001208888604051610b82929190611c79565b6040518091039020149350505050610ef0565b7f12e879e7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610c25576000610bf260048085516109a491906119c3565b806020019051810190610c059190612096565b925050508060e00151805190602001208686604051610b56929190611c79565b7ffaf6a213000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610ce0576000610c8260048085516109a491906119c3565b806020019051810190610c9591906121e7565b9150508060600151805190602001208686604051610cb4929190611c79565b6040518091039020148015610a2d57508060400151805190602001208888604051610b82929190611c79565b7f4f93ad26000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610d70576000610d3d60048085516109a491906119c3565b806020019051810190610d509190612241565b925050508060600151805190602001208686604051610cb4929190611c79565b7fb1bf918f000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610e59576000610dcd60048085516109a491906119c3565b806020019051810190610de09190612366565b9150508060c00151805190602001208686604051610dff929190611c79565b6040518091039020148015610a2d575080516040805173ffffffffffffffffffffffffffffffffffffffff909216602083015201604051602081830303815290604052805190602001208888604051610b82929190611c79565b7f2183dd81000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610ee9576000610eb660048085516109a491906119c3565b806020019051810190610ec991906123c0565b925050508060c00151805190602001208686604051610dff929190611c79565b6000925050505b9695505050505050565b60607fd6a4bc5000000000000000000000000000000000000000000000000000000000610f2b600460008587611739565b610f3491611763565b7fffffffff000000000000000000000000000000000000000000000000000000001603610fa8576000610f6a8360048187611739565b810190610f779190611957565b9050610f8b600480835161038d91906119c3565b806020019051810190610f9e919061243e565b9250610fc6915050565b610fb58260048186611739565b810190610fc29190612573565b9150505b92915050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091527fd6a4bc500000000000000000000000000000000000000000000000000000000061104d600460008587611739565b61105691611763565b7fffffffff0000000000000000000000000000000000000000000000000000000016036110c857600061108c8360048187611739565b8101906110999190611957565b90506110ad600480835161038d91906119c3565b8060200190518101906110c091906126f6565b915050610fc6565b6110d58260048186611739565b8101906101db919061272b565b6060816110f081601f612760565b1015611128576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111328284612760565b8451101561116c576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60608215801561118b57604051915060008252602082016040526111f3565b6040519150601f8416801560200281840101858101878315602002848b0101015b818310156111c45780518352602092830192016111ac565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b60008083601f84011261120e57600080fd5b50813567ffffffffffffffff81111561122657600080fd5b60208301915083602082850101111561025657600080fd5b6000806020838503121561125157600080fd5b823567ffffffffffffffff81111561126857600080fd5b611274858286016111fc565b90969095509350505050565b60005b8381101561129b578181015183820152602001611283565b50506000910152565b600081518084526112bc816020860160208601611280565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600082825180855260208086019550808260051b84010181860160005b848110156113ce577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08684030189528151805173ffffffffffffffffffffffffffffffffffffffff908116855285820151811686860152604080830151821690860152606080830151909116908501526080808201519085015260a08082015160e082870181905291906113a1838801826112a4565b9250505060c08083015192506113ba8187018415159052565b50998501999350509083019060010161130b565b5090979650505050505050565b6020815260006101db60208301846112ee565b600061014082518452602083015181602086015261140e828601826112a4565b9150506040830151848203604086015261142882826112a4565b9150506060830151611452606086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608083015161147a608086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060a08301516114a260a086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060c083015160c085015260e083015160e0850152610100808401516114cb8287018215159052565b50506101209283015115159390920192909252919050565b6040815260006114f660408301856113ee565b828103602084015261150881856112ee565b95945050505050565b6020815260006101db60208301846113ee565b73ffffffffffffffffffffffffffffffffffffffff8116811461154657600080fd5b50565b803561155481611524565b919050565b801515811461154657600080fd5b803561155481611559565b6000806000806000806000806000806101008b8d03121561159257600080fd5b8a3567ffffffffffffffff808211156115aa57600080fd5b6115b68e838f016111fc565b909c509a5060208d01359150808211156115cf57600080fd5b506115dc8d828e016111fc565b90995097505060408b01356115f081611524565b955060608b013561160081611524565b945060808b0135935060a08b0135925060c08b013561161e81611559565b915060e08b013561162e81611559565b809150509295989b9194979a5092959850565b60e08152600061165460e083018a6112a4565b73ffffffffffffffffffffffffffffffffffffffff988916602084015296909716604082015260608101949094526080840192909252151560a0830152151560c09091015292915050565b600080600080600080606087890312156116b857600080fd5b863567ffffffffffffffff808211156116d057600080fd5b6116dc8a838b016111fc565b909850965060208901359150808211156116f557600080fd5b6117018a838b016111fc565b9096509450604089013591508082111561171a57600080fd5b5061172789828a016111fc565b979a9699509497509295939492505050565b6000808585111561174957600080fd5b8386111561175657600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156107b35760049490940360031b84901b1690921692915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff811182821017156117fb576117fb6117a9565b60405290565b604051610140810167ffffffffffffffff811182821017156117fb576117fb6117a9565b604051610100810167ffffffffffffffff811182821017156117fb576117fb6117a9565b60405160c0810167ffffffffffffffff811182821017156117fb576117fb6117a9565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156118b3576118b36117a9565b604052919050565b600067ffffffffffffffff8211156118d5576118d56117a9565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261191257600080fd5b8135611925611920826118bb565b61186c565b81815284602083860101111561193a57600080fd5b816020850160208301376000918101602001919091529392505050565b60006020828403121561196957600080fd5b813567ffffffffffffffff81111561198057600080fd5b61198c84828501611901565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610fc657610fc6611994565b600082601f8301126119e757600080fd5b81516119f5611920826118bb565b818152846020838601011115611a0a57600080fd5b61198c826020830160208701611280565b805161155481611524565b600067ffffffffffffffff821115611a4057611a406117a9565b5060051b60200190565b805161155481611559565b600082601f830112611a6657600080fd5b81516020611a7661192083611a26565b82815260059290921b84018101918181019086841115611a9557600080fd5b8286015b84811015611b9157805167ffffffffffffffff80821115611aba5760008081fd5b818901915060e0807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848d03011215611af35760008081fd5b611afb6117d8565b611b06888501611a1b565b81526040611b15818601611a1b565b898301526060611b26818701611a1b565b8284015260809150611b39828701611a1b565b818401525060a0808601518284015260c091508186015185811115611b5e5760008081fd5b611b6c8f8c838a01016119d6565b828501525050611b7d838601611a4a565b908201528652505050918301918301611a99565b509695505050505050565b60008060008060008060c08789031215611bb557600080fd5b86519550602087015167ffffffffffffffff80821115611bd457600080fd5b611be08a838b016119d6565b96506040890151915080821115611bf657600080fd5b611c028a838b016119d6565b955060608901519150611c1482611524565b608089015160a08a0151929550935080821115611c3057600080fd5b50611c3d89828a01611a55565b9150509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b8183823760009101908152919050565b60008251611c9b818460208701611280565b9190910192915050565b600060208284031215611cb757600080fd5b81517fffffffff00000000000000000000000000000000000000000000000000000000811681146101db57600080fd5b60006101408284031215611cfa57600080fd5b611d02611801565b905081518152602082015167ffffffffffffffff80821115611d2357600080fd5b611d2f858386016119d6565b60208401526040840151915080821115611d4857600080fd5b50611d55848285016119d6565b604083015250611d6760608301611a1b565b6060820152611d7860808301611a1b565b6080820152611d8960a08301611a1b565b60a082015260c082015160c082015260e082015160e0820152610100611db0818401611a4a565b90820152610120611dc2838201611a4a565b9082015292915050565b805163ffffffff8116811461155457600080fd5b600060e08284031215611df257600080fd5b611dfa6117d8565b9050815167ffffffffffffffff811115611e1357600080fd5b611e1f848285016119d6565b825250611e2e60208301611a1b565b60208201526040820151604082015260608201516060820152611e5360808301611a1b565b6080820152611e6460a08301611dcc565b60a0820152611e7560c08301611a4a565b60c082015292915050565b60008060408385031215611e9357600080fd5b825167ffffffffffffffff80821115611eab57600080fd5b611eb786838701611ce7565b93506020850151915080821115611ecd57600080fd5b50611eda85828601611de0565b9150509250929050565b600060208284031215611ef657600080fd5b81356101db81611524565b600080600060608486031215611f1657600080fd5b835167ffffffffffffffff80821115611f2e57600080fd5b611f3a87838801611ce7565b94506020860151915080821115611f5057600080fd5b611f5c87838801611a55565b93506040860151915080821115611f7257600080fd5b50611f7f86828701611de0565b9150509250925092565b60006101008284031215611f9c57600080fd5b611fa4611825565b90508151815260208201516020820152604082015160408201526060820151606082015260808201516080820152611fde60a08301611a1b565b60a082015260c082015167ffffffffffffffff80821115611ffe57600080fd5b61200a858386016119d6565b60c084015260e084015191508082111561202357600080fd5b50612030848285016119d6565b60e08301525092915050565b6000806040838503121561204f57600080fd5b825167ffffffffffffffff8082111561206757600080fd5b61207386838701611ce7565b9350602085015191508082111561208957600080fd5b50611eda85828601611f89565b6000806000606084860312156120ab57600080fd5b835167ffffffffffffffff808211156120c357600080fd5b6120cf87838801611ce7565b945060208601519150808211156120e557600080fd5b6120f187838801611a55565b9350604086015191508082111561210757600080fd5b50611f7f86828701611f89565b805167ffffffffffffffff8116811461155457600080fd5b80516007811061155457600080fd5b600060c0828403121561214d57600080fd5b612155611849565b905061216082611dcc565b815261216e60208301612114565b6020820152604082015167ffffffffffffffff8082111561218e57600080fd5b61219a858386016119d6565b604084015260608401519150808211156121b357600080fd5b506121c0848285016119d6565b606083015250608082015160808201526121dc60a0830161212c565b60a082015292915050565b600080604083850312156121fa57600080fd5b825167ffffffffffffffff8082111561221257600080fd5b61221e86838701611ce7565b9350602085015191508082111561223457600080fd5b50611eda8582860161213b565b60008060006060848603121561225657600080fd5b835167ffffffffffffffff8082111561226e57600080fd5b61227a87838801611ce7565b9450602086015191508082111561229057600080fd5b61229c87838801611a55565b935060408601519150808211156122b257600080fd5b50611f7f8682870161213b565b600060e082840312156122d157600080fd5b6122d96117d8565b90506122e482611a1b565b81526122f260208301611a1b565b602082015261230360408301611a1b565b60408201526060820151606082015261231e60808301611dcc565b608082015261232f60a08301611dcc565b60a082015260c082015167ffffffffffffffff81111561234e57600080fd5b61235a848285016119d6565b60c08301525092915050565b6000806040838503121561237957600080fd5b825167ffffffffffffffff8082111561239157600080fd5b61239d86838701611ce7565b935060208501519150808211156123b357600080fd5b50611eda858286016122bf565b6000806000606084860312156123d557600080fd5b835167ffffffffffffffff808211156123ed57600080fd5b6123f987838801611ce7565b9450602086015191508082111561240f57600080fd5b61241b87838801611a55565b9350604086015191508082111561243157600080fd5b50611f7f868287016122bf565b6000806040838503121561245157600080fd5b825167ffffffffffffffff8082111561246957600080fd5b61247586838701611ce7565b9350602085015191508082111561248b57600080fd5b50611eda85828601611a55565b600061014082840312156124ab57600080fd5b6124b3611801565b905081358152602082013567ffffffffffffffff808211156124d457600080fd5b6124e085838601611901565b602084015260408401359150808211156124f957600080fd5b5061250684828501611901565b60408301525061251860608301611549565b606082015261252960808301611549565b608082015261253a60a08301611549565b60a082015260c082013560c082015260e082013560e0820152610100612561818401611567565b90820152610120611dc2838201611567565b6000806040838503121561258657600080fd5b823567ffffffffffffffff8082111561259e57600080fd5b6125aa86838701612498565b93506020915081850135818111156125c157600080fd5b8501601f810187136125d257600080fd5b80356125e061192082611a26565b81815260059190911b820184019084810190898311156125ff57600080fd5b8584015b838110156126e55780358681111561261a57600080fd5b850160e0818d037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe001121561264e57600080fd5b6126566117d8565b612661898301611549565b815261266f60408301611549565b8982015261267f60608301611549565b604082015261269060808301611549565b606082015260a0820135608082015260c080830135898111156126b35760008081fd5b6126c18f8c83870101611901565b60a0840152506126d360e08401611567565b90820152845250918601918601612603565b508096505050505050509250929050565b60006020828403121561270857600080fd5b815167ffffffffffffffff81111561271f57600080fd5b61198c84828501611ce7565b60006020828403121561273d57600080fd5b813567ffffffffffffffff81111561275457600080fd5b61198c84828501612498565b80820180821115610fc657610fc661199456fea2646970667358221220e926c02493fbe82994870e27d07e34a5fdaf9cdb7f6ba70768e982a23f4f6f3164736f6c63430008110033";

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
