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
  "0x608060405234801561001057600080fd5b5061238e806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063c318eeda1161005b578063c318eeda146100ec578063d53482cf14610147578063ee0aa3201461016a578063f58ae2ce1461019057600080fd5b8063070e81f114610082578063103c5200146100ab5780637f99d7af146100cc575b600080fd5b610095610090366004610fa0565b6101a3565b6040516100a2919061113d565b60405180910390f35b6100be6100b9366004610fa0565b6101b6565b6040516100a2929190611245565b6100df6100da366004610fa0565b610231565b6040516100a29190611273565b6100ff6100fa366004610fa0565b61028d565b6040805173ffffffffffffffffffffffffffffffffffffffff96871681526020810195909552928516928401929092529092166060820152608081019190915260a0016100a2565b61015a6101553660046112d4565b610405565b60405190151581526020016100a2565b61017d610178366004610fa0565b610696565b6040516100a297969594939291906113a3565b61015a61019e366004611401565b610751565b60606101af8383610c5c565b9392505050565b604080516101408101825260008082526060602083018190529282018390528282018190526080820181905260a0820181905260c0820181905260e082018190526101008201819052610120820152906102108484610d2e565b91508161010001511561022a576102278484610c5c565b90505b9250929050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091526101af8383610d2e565b60008060008060006060600088888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509394507fd6a4bc50000000000000000000000000000000000000000000000000000000009361030293506004925090508b8d61149b565b61030b916114c5565b7fffffffff00000000000000000000000000000000000000000000000000000000160361034f5761033f886004818c61149b565b81019061034c91906116bb565b90505b61036960048083516103619190611727565b839190610e44565b80602001905181019061037c9190611900565b8051929a509097509550859350600092501515905061039d5761039d6119ae565b6020026020010151604001519650816000815181106103be576103be6119ae565b602002602001015160800151955081600183516103db9190611727565b815181106103eb576103eb6119ae565b602002602001015160600151935050509295509295909350565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526104608c8c610696565b1515610120880152151561010087015260e086015260c085015273ffffffffffffffffffffffffffffffffffffffff90811660a0850152166080830152602080830191909152604080516000815291820180825282519020916104c7918d918d91016119dd565b60405160208183030381529060405280519060200120148061053a575089896040516020016104f79291906119dd565b60405160208183030381529060405280519060200120816020015160405160200161052291906119ed565b60405160208183030381529060405280519060200120145b8015610594575073ffffffffffffffffffffffffffffffffffffffff808916148061059457508773ffffffffffffffffffffffffffffffffffffffff16816080015173ffffffffffffffffffffffffffffffffffffffff16145b80156105ee575073ffffffffffffffffffffffffffffffffffffffff80881614806105ee57508673ffffffffffffffffffffffffffffffffffffffff168160a0015173ffffffffffffffffffffffffffffffffffffffff16145b801561062657507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8614806106265750858160c00151145b801561065e57507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff85148061065e5750848160e00151145b801561067257508315158161010001511515145b801561068657508215158161012001511515145b9c9b505050505050505050505050565b606060008060008060008060006106ad8a8a610d2e565b9050806101000151156107105760006106c68b8b610c5c565b9050806000815181106106db576106db6119ae565b6020026020010151604001519750806000815181106106fc576106fc6119ae565b60200260200101516080015195505061071f565b806080015196508060c0015194505b602081015160a082015160e083015161010084015161012090940151929d999c50909a50959850949690955092505050565b60008087878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509394507fd6a4bc5000000000000000000000000000000000000000000000000000000000936107bd93506004925090508a8c61149b565b6107c6916114c5565b7fffffffff00000000000000000000000000000000000000000000000000000000160361080a576107fa876004818b61149b565b81019061080791906116bb565b90505b6000818060200190518101906108209190611a09565b90507f72366cd3000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610912576000610887600480855161087f9190611727565b859190610e44565b80602001905181019061089a9190611be4565b91505080600001518051906020012086866040516108b99291906119dd565b60405180910390201480156109085750602081015173ffffffffffffffffffffffffffffffffffffffff166108f0888a018a611c48565b73ffffffffffffffffffffffffffffffffffffffff16145b9350505050610c52565b7f7c0ce6e9000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008216016109a257600061096f600480855161087f9190611727565b8060200190518101906109829190611c65565b9250505080600001518051906020012086866040516108b99291906119dd565b7f41e15319000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610a705760006109ff600480855161087f9190611727565b806020019051810190610a129190611da0565b9150508060e00151805190602001208686604051610a319291906119dd565b604051809103902014801561090857508060c00151805190602001208888604051610a5d9291906119dd565b6040518091039020149350505050610c52565b7f12e879e7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610b00576000610acd600480855161087f9190611727565b806020019051810190610ae09190611dfa565b925050508060e00151805190602001208686604051610a319291906119dd565b7ffaf6a213000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610bbb576000610b5d600480855161087f9190611727565b806020019051810190610b709190611f4b565b9150508060600151805190602001208686604051610b8f9291906119dd565b604051809103902014801561090857508060400151805190602001208888604051610a5d9291906119dd565b7f4f93ad26000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610c4b576000610c18600480855161087f9190611727565b806020019051810190610c2b9190611fa5565b925050508060600151805190602001208686604051610b8f9291906119dd565b6000925050505b9695505050505050565b60607fd6a4bc5000000000000000000000000000000000000000000000000000000000610c8d60046000858761149b565b610c96916114c5565b7fffffffff000000000000000000000000000000000000000000000000000000001603610d0a576000610ccc836004818761149b565b810190610cd991906116bb565b9050610ced60048083516103619190611727565b806020019051810190610d009190612023565b9250610d28915050565b610d17826004818661149b565b810190610d249190612158565b9150505b92915050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091527fd6a4bc5000000000000000000000000000000000000000000000000000000000610daf60046000858761149b565b610db8916114c5565b7fffffffff000000000000000000000000000000000000000000000000000000001603610e2a576000610dee836004818761149b565b810190610dfb91906116bb565b9050610e0f60048083516103619190611727565b806020019051810190610e2291906122db565b915050610d28565b610e37826004818661149b565b8101906101af9190612310565b606081610e5281601f612345565b1015610e8a576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e948284612345565b84511015610ece576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015610eed5760405191506000825260208201604052610f55565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015610f26578051835260209283019201610f0e565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b60008083601f840112610f7057600080fd5b50813567ffffffffffffffff811115610f8857600080fd5b60208301915083602082850101111561022a57600080fd5b60008060208385031215610fb357600080fd5b823567ffffffffffffffff811115610fca57600080fd5b610fd685828601610f5e565b90969095509350505050565b60005b83811015610ffd578181015183820152602001610fe5565b50506000910152565b6000815180845261101e816020860160208601610fe2565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600082825180855260208086019550808260051b84010181860160005b84811015611130577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08684030189528151805173ffffffffffffffffffffffffffffffffffffffff908116855285820151811686860152604080830151821690860152606080830151909116908501526080808201519085015260a08082015160e0828701819052919061110383880182611006565b9250505060c080830151925061111c8187018415159052565b50998501999350509083019060010161106d565b5090979650505050505050565b6020815260006101af6020830184611050565b600061014082518452602083015181602086015261117082860182611006565b9150506040830151848203604086015261118a8282611006565b91505060608301516111b4606086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060808301516111dc608086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060a083015161120460a086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060c083015160c085015260e083015160e08501526101008084015161122d8287018215159052565b50506101209283015115159390920192909252919050565b6040815260006112586040830185611150565b828103602084015261126a8185611050565b95945050505050565b6020815260006101af6020830184611150565b73ffffffffffffffffffffffffffffffffffffffff811681146112a857600080fd5b50565b80356112b681611286565b919050565b80151581146112a857600080fd5b80356112b6816112bb565b6000806000806000806000806000806101008b8d0312156112f457600080fd5b8a3567ffffffffffffffff8082111561130c57600080fd5b6113188e838f01610f5e565b909c509a5060208d013591508082111561133157600080fd5b5061133e8d828e01610f5e565b90995097505060408b013561135281611286565b955060608b013561136281611286565b945060808b0135935060a08b0135925060c08b0135611380816112bb565b915060e08b0135611390816112bb565b809150509295989b9194979a5092959850565b60e0815260006113b660e083018a611006565b73ffffffffffffffffffffffffffffffffffffffff988916602084015296909716604082015260608101949094526080840192909252151560a0830152151560c09091015292915050565b6000806000806000806060878903121561141a57600080fd5b863567ffffffffffffffff8082111561143257600080fd5b61143e8a838b01610f5e565b9098509650602089013591508082111561145757600080fd5b6114638a838b01610f5e565b9096509450604089013591508082111561147c57600080fd5b5061148989828a01610f5e565b979a9699509497509295939492505050565b600080858511156114ab57600080fd5b838611156114b857600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156115055780818660040360031b1b83161692505b505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff8111828210171561155f5761155f61150d565b60405290565b604051610140810167ffffffffffffffff8111828210171561155f5761155f61150d565b604051610100810167ffffffffffffffff8111828210171561155f5761155f61150d565b60405160c0810167ffffffffffffffff8111828210171561155f5761155f61150d565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156116175761161761150d565b604052919050565b600067ffffffffffffffff8211156116395761163961150d565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261167657600080fd5b81356116896116848261161f565b6115d0565b81815284602083860101111561169e57600080fd5b816020850160208301376000918101602001919091529392505050565b6000602082840312156116cd57600080fd5b813567ffffffffffffffff8111156116e457600080fd5b6116f084828501611665565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610d2857610d286116f8565b600082601f83011261174b57600080fd5b81516117596116848261161f565b81815284602083860101111561176e57600080fd5b6116f0826020830160208701610fe2565b80516112b681611286565b600067ffffffffffffffff8211156117a4576117a461150d565b5060051b60200190565b80516112b6816112bb565b600082601f8301126117ca57600080fd5b815160206117da6116848361178a565b82815260059290921b840181019181810190868411156117f957600080fd5b8286015b848110156118f557805167ffffffffffffffff8082111561181e5760008081fd5b818901915060e0807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848d030112156118575760008081fd5b61185f61153c565b61186a88850161177f565b8152604061187981860161177f565b89830152606061188a81870161177f565b828401526080915061189d82870161177f565b818401525060a0808601518284015260c0915081860151858111156118c25760008081fd5b6118d08f8c838a010161173a565b8285015250506118e18386016117ae565b9082015286525050509183019183016117fd565b509695505050505050565b60008060008060008060c0878903121561191957600080fd5b86519550602087015167ffffffffffffffff8082111561193857600080fd5b6119448a838b0161173a565b9650604089015191508082111561195a57600080fd5b6119668a838b0161173a565b95506060890151915061197882611286565b608089015160a08a015192955093508082111561199457600080fd5b506119a189828a016117b9565b9150509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b8183823760009101908152919050565b600082516119ff818460208701610fe2565b9190910192915050565b600060208284031215611a1b57600080fd5b81517fffffffff00000000000000000000000000000000000000000000000000000000811681146101af57600080fd5b60006101408284031215611a5e57600080fd5b611a66611565565b905081518152602082015167ffffffffffffffff80821115611a8757600080fd5b611a938583860161173a565b60208401526040840151915080821115611aac57600080fd5b50611ab98482850161173a565b604083015250611acb6060830161177f565b6060820152611adc6080830161177f565b6080820152611aed60a0830161177f565b60a082015260c082015160c082015260e082015160e0820152610100611b148184016117ae565b90820152610120611b268382016117ae565b9082015292915050565b805163ffffffff811681146112b657600080fd5b600060e08284031215611b5657600080fd5b611b5e61153c565b9050815167ffffffffffffffff811115611b7757600080fd5b611b838482850161173a565b825250611b926020830161177f565b60208201526040820151604082015260608201516060820152611bb76080830161177f565b6080820152611bc860a08301611b30565b60a0820152611bd960c083016117ae565b60c082015292915050565b60008060408385031215611bf757600080fd5b825167ffffffffffffffff80821115611c0f57600080fd5b611c1b86838701611a4b565b93506020850151915080821115611c3157600080fd5b50611c3e85828601611b44565b9150509250929050565b600060208284031215611c5a57600080fd5b81356101af81611286565b600080600060608486031215611c7a57600080fd5b835167ffffffffffffffff80821115611c9257600080fd5b611c9e87838801611a4b565b94506020860151915080821115611cb457600080fd5b611cc0878388016117b9565b93506040860151915080821115611cd657600080fd5b50611ce386828701611b44565b9150509250925092565b60006101008284031215611d0057600080fd5b611d08611589565b90508151815260208201516020820152604082015160408201526060820151606082015260808201516080820152611d4260a0830161177f565b60a082015260c082015167ffffffffffffffff80821115611d6257600080fd5b611d6e8583860161173a565b60c084015260e0840151915080821115611d8757600080fd5b50611d948482850161173a565b60e08301525092915050565b60008060408385031215611db357600080fd5b825167ffffffffffffffff80821115611dcb57600080fd5b611dd786838701611a4b565b93506020850151915080821115611ded57600080fd5b50611c3e85828601611ced565b600080600060608486031215611e0f57600080fd5b835167ffffffffffffffff80821115611e2757600080fd5b611e3387838801611a4b565b94506020860151915080821115611e4957600080fd5b611e55878388016117b9565b93506040860151915080821115611e6b57600080fd5b50611ce386828701611ced565b805167ffffffffffffffff811681146112b657600080fd5b8051600781106112b657600080fd5b600060c08284031215611eb157600080fd5b611eb96115ad565b9050611ec482611b30565b8152611ed260208301611e78565b6020820152604082015167ffffffffffffffff80821115611ef257600080fd5b611efe8583860161173a565b60408401526060840151915080821115611f1757600080fd5b50611f248482850161173a565b60608301525060808201516080820152611f4060a08301611e90565b60a082015292915050565b60008060408385031215611f5e57600080fd5b825167ffffffffffffffff80821115611f7657600080fd5b611f8286838701611a4b565b93506020850151915080821115611f9857600080fd5b50611c3e85828601611e9f565b600080600060608486031215611fba57600080fd5b835167ffffffffffffffff80821115611fd257600080fd5b611fde87838801611a4b565b94506020860151915080821115611ff457600080fd5b612000878388016117b9565b9350604086015191508082111561201657600080fd5b50611ce386828701611e9f565b6000806040838503121561203657600080fd5b825167ffffffffffffffff8082111561204e57600080fd5b61205a86838701611a4b565b9350602085015191508082111561207057600080fd5b50611c3e858286016117b9565b6000610140828403121561209057600080fd5b612098611565565b905081358152602082013567ffffffffffffffff808211156120b957600080fd5b6120c585838601611665565b602084015260408401359150808211156120de57600080fd5b506120eb84828501611665565b6040830152506120fd606083016112ab565b606082015261210e608083016112ab565b608082015261211f60a083016112ab565b60a082015260c082013560c082015260e082013560e08201526101006121468184016112c9565b90820152610120611b268382016112c9565b6000806040838503121561216b57600080fd5b823567ffffffffffffffff8082111561218357600080fd5b61218f8683870161207d565b93506020915081850135818111156121a657600080fd5b8501601f810187136121b757600080fd5b80356121c56116848261178a565b81815260059190911b820184019084810190898311156121e457600080fd5b8584015b838110156122ca578035868111156121ff57600080fd5b850160e0818d037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe001121561223357600080fd5b61223b61153c565b6122468983016112ab565b8152612254604083016112ab565b89820152612264606083016112ab565b6040820152612275608083016112ab565b606082015260a0820135608082015260c080830135898111156122985760008081fd5b6122a68f8c83870101611665565b60a0840152506122b860e084016112c9565b908201528452509186019186016121e8565b508096505050505050509250929050565b6000602082840312156122ed57600080fd5b815167ffffffffffffffff81111561230457600080fd5b6116f084828501611a4b565b60006020828403121561232257600080fd5b813567ffffffffffffffff81111561233957600080fd5b6116f08482850161207d565b80820180821115610d2857610d286116f856fea2646970667358221220845fa4714e225e112810324764cb06113d9e73a8ea9b4ed94bbfbb02527b401764736f6c63430008110033";

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
