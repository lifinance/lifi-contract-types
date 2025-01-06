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
  "0x608060405234801561001057600080fd5b506127c1806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063d53482cf1161005b578063d53482cf14610152578063df1c3a5b14610175578063ee0aa32014610196578063f58ae2ce146101bc57600080fd5b8063070e81f11461008d578063103c5200146100b65780637f99d7af146100d7578063c318eeda146100f7575b600080fd5b6100a061009b366004611240565b6101cf565b6040516100ad91906113bc565b60405180910390f35b6100c96100c4366004611240565b6101e2565b6040516100ad9291906114c4565b6100ea6100e5366004611240565b61025d565b6040516100ad91906114f2565b61010a610105366004611240565b6102b9565b6040805173ffffffffffffffffffffffffffffffffffffffff96871681526020810195909552928516928401929092529092166060820152608081019190915260a0016100ad565b610165610160366004611553565b610431565b60405190151581526020016100ad565b610188610183366004611240565b6106c2565b6040519081526020016100ad565b6101a96101a4366004611240565b6107bb565b6040516100ad9796959493929190611622565b6101656101ca366004611680565b610876565b60606101db8383610efc565b9392505050565b604080516101408101825260008082526060602083018190529282018390528282018190526080820181905260a0820181905260c0820181905260e0820181905261010082018190526101208201529061023c8484610fce565b915081610100015115610256576102538484610efc565b90505b9250929050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091526101db8383610fce565b60008060008060006060600088888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509394507fd6a4bc50000000000000000000000000000000000000000000000000000000009361032e93506004925090508b8d61171a565b61033791611744565b7fffffffff00000000000000000000000000000000000000000000000000000000160361037b5761036b886004818c61171a565b8101906103789190611938565b90505b610395600480835161038d91906119a4565b8391906110e4565b8060200190518101906103a89190611b7d565b8051929a50909750955085935060009250151590506103c9576103c9611c2b565b6020026020010151604001519650816000815181106103ea576103ea611c2b565b6020026020010151608001519550816001835161040791906119a4565b8151811061041757610417611c2b565b602002602001015160600151935050509295509295909350565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261048c8c8c6107bb565b1515610120880152151561010087015260e086015260c085015273ffffffffffffffffffffffffffffffffffffffff90811660a0850152166080830152602080830191909152604080516000815291820180825282519020916104f3918d918d9101611c5a565b60405160208183030381529060405280519060200120148061056657508989604051602001610523929190611c5a565b60405160208183030381529060405280519060200120816020015160405160200161054e9190611c6a565b60405160208183030381529060405280519060200120145b80156105c0575073ffffffffffffffffffffffffffffffffffffffff80891614806105c057508773ffffffffffffffffffffffffffffffffffffffff16816080015173ffffffffffffffffffffffffffffffffffffffff16145b801561061a575073ffffffffffffffffffffffffffffffffffffffff808816148061061a57508673ffffffffffffffffffffffffffffffffffffffff168160a0015173ffffffffffffffffffffffffffffffffffffffff16145b801561065257507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8614806106525750858160c00151145b801561068a57507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff85148061068a5750848160e00151145b801561069e57508315158161010001511515145b80156106b257508215158161012001511515145b9c9b505050505050505050505050565b60008083838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525093945061070a9250879150869050610fce565b90507fd6a4bc500000000000000000000000000000000000000000000000000000000061073b60046000878961171a565b61074491611744565b7fffffffff00000000000000000000000000000000000000000000000000000000160361078857610778846004818861171a565b8101906107859190611938565b91505b806101000151156107a557606482015182016024015192506107b3565b604482015182016024015192505b505092915050565b606060008060008060008060006107d28a8a610fce565b9050806101000151156108355760006107eb8b8b610efc565b90508060008151811061080057610800611c2b565b60200260200101516040015197508060008151811061082157610821611c2b565b602002602001015160800151955050610844565b806080015196508060c0015194505b602081015160a082015160e083015161010084015161012090940151929d999c50909a50959850949690955092505050565b60008087878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509394507fd6a4bc5000000000000000000000000000000000000000000000000000000000936108e293506004925090508a8c61171a565b6108eb91611744565b7fffffffff00000000000000000000000000000000000000000000000000000000160361092f5761091f876004818b61171a565b81019061092c9190611938565b90505b6000818060200190518101906109459190611c86565b90507f72366cd3000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610a375760006109ac60048085516109a491906119a4565b8591906110e4565b8060200190518101906109bf9190611e61565b91505080600001518051906020012086866040516109de929190611c5a565b6040518091039020148015610a2d5750602081015173ffffffffffffffffffffffffffffffffffffffff16610a15888a018a611ec5565b73ffffffffffffffffffffffffffffffffffffffff16145b9350505050610ef2565b7f7c0ce6e9000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610ac7576000610a9460048085516109a491906119a4565b806020019051810190610aa79190611ee2565b9250505080600001518051906020012086866040516109de929190611c5a565b7f41e15319000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610b95576000610b2460048085516109a491906119a4565b806020019051810190610b37919061201d565b9150508060e00151805190602001208686604051610b56929190611c5a565b6040518091039020148015610a2d57508060c00151805190602001208888604051610b82929190611c5a565b6040518091039020149350505050610ef2565b7f12e879e7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610c25576000610bf260048085516109a491906119a4565b806020019051810190610c059190612077565b925050508060e00151805190602001208686604051610b56929190611c5a565b7ffaf6a213000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610ce0576000610c8260048085516109a491906119a4565b806020019051810190610c9591906121c8565b9150508060600151805190602001208686604051610cb4929190611c5a565b6040518091039020148015610a2d57508060400151805190602001208888604051610b82929190611c5a565b7f4f93ad26000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610d70576000610d3d60048085516109a491906119a4565b806020019051810190610d509190612222565b925050508060600151805190602001208686604051610cb4929190611c5a565b7fd733bcea000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610e5a576000610dcd60048085516109a491906119a4565b806020019051810190610de0919061237e565b915050806101200151805190602001208686604051610e00929190611c5a565b6040518091039020148015610a2d575080516040805173ffffffffffffffffffffffffffffffffffffffff909216602083015201604051602081830303815290604052805190602001208888604051610b82929190611c5a565b7fd77cd343000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610eeb576000610eb760048085516109a491906119a4565b806020019051810190610eca91906123d8565b92505050806101200151805190602001208686604051610e00929190611c5a565b6000925050505b9695505050505050565b60607fd6a4bc5000000000000000000000000000000000000000000000000000000000610f2d60046000858761171a565b610f3691611744565b7fffffffff000000000000000000000000000000000000000000000000000000001603610faa576000610f6c836004818761171a565b810190610f799190611938565b9050610f8d600480835161038d91906119a4565b806020019051810190610fa09190612456565b9250610fc8915050565b610fb7826004818661171a565b810190610fc4919061258b565b9150505b92915050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091527fd6a4bc500000000000000000000000000000000000000000000000000000000061104f60046000858761171a565b61105891611744565b7fffffffff0000000000000000000000000000000000000000000000000000000016036110ca57600061108e836004818761171a565b81019061109b9190611938565b90506110af600480835161038d91906119a4565b8060200190518101906110c2919061270e565b915050610fc8565b6110d7826004818661171a565b8101906101db9190612743565b6060816110f281601f612778565b101561112a576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111348284612778565b8451101561116e576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60608215801561118d57604051915060008252602082016040526111f5565b6040519150601f8416801560200281840101858101878315602002848b0101015b818310156111c65780518352602092830192016111ae565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b60008083601f84011261121057600080fd5b50813567ffffffffffffffff81111561122857600080fd5b60208301915083602082850101111561025657600080fd5b6000806020838503121561125357600080fd5b823567ffffffffffffffff81111561126a57600080fd5b611276858286016111fe565b90969095509350505050565b60005b8381101561129d578181015183820152602001611285565b50506000910152565b600081518084526112be816020860160208601611282565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600081518084526020808501808196508360051b8101915082860160005b858110156113af5782840389528151805173ffffffffffffffffffffffffffffffffffffffff908116865286820151811687870152604080830151821690870152606080830151909116908601526080808201519086015260a08082015160e08288018190529190611382838901826112a6565b9250505060c080830151925061139b8188018415159052565b50998601999450509084019060010161130e565b5091979650505050505050565b6020815260006101db60208301846112f0565b60006101408251845260208301518160208601526113ef828601826112a6565b9150506040830151848203604086015261140982826112a6565b9150506060830151611433606086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608083015161145b608086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060a083015161148360a086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060c083015160c085015260e083015160e0850152610100808401516114ac8287018215159052565b50506101209283015115159390920192909252919050565b6040815260006114d760408301856113cf565b82810360208401526114e981856112f0565b95945050505050565b6020815260006101db60208301846113cf565b73ffffffffffffffffffffffffffffffffffffffff8116811461152757600080fd5b50565b803561153581611505565b919050565b801515811461152757600080fd5b80356115358161153a565b6000806000806000806000806000806101008b8d03121561157357600080fd5b8a3567ffffffffffffffff8082111561158b57600080fd5b6115978e838f016111fe565b909c509a5060208d01359150808211156115b057600080fd5b506115bd8d828e016111fe565b90995097505060408b01356115d181611505565b955060608b01356115e181611505565b945060808b0135935060a08b0135925060c08b01356115ff8161153a565b915060e08b013561160f8161153a565b809150509295989b9194979a5092959850565b60e08152600061163560e083018a6112a6565b73ffffffffffffffffffffffffffffffffffffffff988916602084015296909716604082015260608101949094526080840192909252151560a0830152151560c09091015292915050565b6000806000806000806060878903121561169957600080fd5b863567ffffffffffffffff808211156116b157600080fd5b6116bd8a838b016111fe565b909850965060208901359150808211156116d657600080fd5b6116e28a838b016111fe565b909650945060408901359150808211156116fb57600080fd5b5061170889828a016111fe565b979a9699509497509295939492505050565b6000808585111561172a57600080fd5b8386111561173757600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156107b35760049490940360031b84901b1690921692915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff811182821017156117dc576117dc61178a565b60405290565b604051610140810167ffffffffffffffff811182821017156117dc576117dc61178a565b604051610100810167ffffffffffffffff811182821017156117dc576117dc61178a565b60405160c0810167ffffffffffffffff811182821017156117dc576117dc61178a565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156118945761189461178a565b604052919050565b600067ffffffffffffffff8211156118b6576118b661178a565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126118f357600080fd5b81356119066119018261189c565b61184d565b81815284602083860101111561191b57600080fd5b816020850160208301376000918101602001919091529392505050565b60006020828403121561194a57600080fd5b813567ffffffffffffffff81111561196157600080fd5b61196d848285016118e2565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610fc857610fc8611975565b600082601f8301126119c857600080fd5b81516119d66119018261189c565b8181528460208386010111156119eb57600080fd5b61196d826020830160208701611282565b805161153581611505565b600067ffffffffffffffff821115611a2157611a2161178a565b5060051b60200190565b80516115358161153a565b600082601f830112611a4757600080fd5b81516020611a5761190183611a07565b82815260059290921b84018101918181019086841115611a7657600080fd5b8286015b84811015611b7257805167ffffffffffffffff80821115611a9b5760008081fd5b818901915060e0807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848d03011215611ad45760008081fd5b611adc6117b9565b611ae78885016119fc565b81526040611af68186016119fc565b898301526060611b078187016119fc565b8284015260809150611b1a8287016119fc565b818401525060a0808601518284015260c091508186015185811115611b3f5760008081fd5b611b4d8f8c838a01016119b7565b828501525050611b5e838601611a2b565b908201528652505050918301918301611a7a565b509695505050505050565b60008060008060008060c08789031215611b9657600080fd5b86519550602087015167ffffffffffffffff80821115611bb557600080fd5b611bc18a838b016119b7565b96506040890151915080821115611bd757600080fd5b611be38a838b016119b7565b955060608901519150611bf582611505565b608089015160a08a0151929550935080821115611c1157600080fd5b50611c1e89828a01611a36565b9150509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b8183823760009101908152919050565b60008251611c7c818460208701611282565b9190910192915050565b600060208284031215611c9857600080fd5b81517fffffffff00000000000000000000000000000000000000000000000000000000811681146101db57600080fd5b60006101408284031215611cdb57600080fd5b611ce36117e2565b905081518152602082015167ffffffffffffffff80821115611d0457600080fd5b611d10858386016119b7565b60208401526040840151915080821115611d2957600080fd5b50611d36848285016119b7565b604083015250611d48606083016119fc565b6060820152611d59608083016119fc565b6080820152611d6a60a083016119fc565b60a082015260c082015160c082015260e082015160e0820152610100611d91818401611a2b565b90820152610120611da3838201611a2b565b9082015292915050565b805163ffffffff8116811461153557600080fd5b600060e08284031215611dd357600080fd5b611ddb6117b9565b9050815167ffffffffffffffff811115611df457600080fd5b611e00848285016119b7565b825250611e0f602083016119fc565b60208201526040820151604082015260608201516060820152611e34608083016119fc565b6080820152611e4560a08301611dad565b60a0820152611e5660c08301611a2b565b60c082015292915050565b60008060408385031215611e7457600080fd5b825167ffffffffffffffff80821115611e8c57600080fd5b611e9886838701611cc8565b93506020850151915080821115611eae57600080fd5b50611ebb85828601611dc1565b9150509250929050565b600060208284031215611ed757600080fd5b81356101db81611505565b600080600060608486031215611ef757600080fd5b835167ffffffffffffffff80821115611f0f57600080fd5b611f1b87838801611cc8565b94506020860151915080821115611f3157600080fd5b611f3d87838801611a36565b93506040860151915080821115611f5357600080fd5b50611f6086828701611dc1565b9150509250925092565b60006101008284031215611f7d57600080fd5b611f85611806565b90508151815260208201516020820152604082015160408201526060820151606082015260808201516080820152611fbf60a083016119fc565b60a082015260c082015167ffffffffffffffff80821115611fdf57600080fd5b611feb858386016119b7565b60c084015260e084015191508082111561200457600080fd5b50612011848285016119b7565b60e08301525092915050565b6000806040838503121561203057600080fd5b825167ffffffffffffffff8082111561204857600080fd5b61205486838701611cc8565b9350602085015191508082111561206a57600080fd5b50611ebb85828601611f6a565b60008060006060848603121561208c57600080fd5b835167ffffffffffffffff808211156120a457600080fd5b6120b087838801611cc8565b945060208601519150808211156120c657600080fd5b6120d287838801611a36565b935060408601519150808211156120e857600080fd5b50611f6086828701611f6a565b805167ffffffffffffffff8116811461153557600080fd5b80516007811061153557600080fd5b600060c0828403121561212e57600080fd5b61213661182a565b905061214182611dad565b815261214f602083016120f5565b6020820152604082015167ffffffffffffffff8082111561216f57600080fd5b61217b858386016119b7565b6040840152606084015191508082111561219457600080fd5b506121a1848285016119b7565b606083015250608082015160808201526121bd60a0830161210d565b60a082015292915050565b600080604083850312156121db57600080fd5b825167ffffffffffffffff808211156121f357600080fd5b6121ff86838701611cc8565b9350602085015191508082111561221557600080fd5b50611ebb8582860161211c565b60008060006060848603121561223757600080fd5b835167ffffffffffffffff8082111561224f57600080fd5b61225b87838801611cc8565b9450602086015191508082111561227157600080fd5b61227d87838801611a36565b9350604086015191508082111561229357600080fd5b50611f608682870161211c565b600061014082840312156122b357600080fd5b6122bb6117e2565b90506122c6826119fc565b81526122d4602083016119fc565b60208201526122e5604083016119fc565b604082015260608201516060820152612300608083016120f5565b608082015261231160a083016119fc565b60a082015261232260c08301611dad565b60c082015261233360e08301611dad565b60e0820152610100612346818401611dad565b908201526101208281015167ffffffffffffffff81111561236657600080fd5b612372858286016119b7565b82840152505092915050565b6000806040838503121561239157600080fd5b825167ffffffffffffffff808211156123a957600080fd5b6123b586838701611cc8565b935060208501519150808211156123cb57600080fd5b50611ebb858286016122a0565b6000806000606084860312156123ed57600080fd5b835167ffffffffffffffff8082111561240557600080fd5b61241187838801611cc8565b9450602086015191508082111561242757600080fd5b61243387838801611a36565b9350604086015191508082111561244957600080fd5b50611f60868287016122a0565b6000806040838503121561246957600080fd5b825167ffffffffffffffff8082111561248157600080fd5b61248d86838701611cc8565b935060208501519150808211156124a357600080fd5b50611ebb85828601611a36565b600061014082840312156124c357600080fd5b6124cb6117e2565b905081358152602082013567ffffffffffffffff808211156124ec57600080fd5b6124f8858386016118e2565b6020840152604084013591508082111561251157600080fd5b5061251e848285016118e2565b6040830152506125306060830161152a565b60608201526125416080830161152a565b608082015261255260a0830161152a565b60a082015260c082013560c082015260e082013560e0820152610100612579818401611548565b90820152610120611da3838201611548565b6000806040838503121561259e57600080fd5b823567ffffffffffffffff808211156125b657600080fd5b6125c2868387016124b0565b93506020915081850135818111156125d957600080fd5b8501601f810187136125ea57600080fd5b80356125f861190182611a07565b81815260059190911b8201840190848101908983111561261757600080fd5b8584015b838110156126fd5780358681111561263257600080fd5b850160e0818d037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe001121561266657600080fd5b61266e6117b9565b61267989830161152a565b81526126876040830161152a565b898201526126976060830161152a565b60408201526126a86080830161152a565b606082015260a0820135608082015260c080830135898111156126cb5760008081fd5b6126d98f8c838701016118e2565b60a0840152506126eb60e08401611548565b9082015284525091860191860161261b565b508096505050505050509250929050565b60006020828403121561272057600080fd5b815167ffffffffffffffff81111561273757600080fd5b61196d84828501611cc8565b60006020828403121561275557600080fd5b813567ffffffffffffffff81111561276c57600080fd5b61196d848285016124b0565b80820180821115610fc857610fc861197556fea2646970667358221220a4a3c9cdecde5b61b26c0e545a8b95daa71ff383e66274efadbeb2eb4b26503c64736f6c63430008110033";

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
