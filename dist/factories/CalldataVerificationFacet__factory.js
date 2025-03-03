"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalldataVerificationFacet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
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
        name: "test",
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
        name: "InvalidCallData",
        inputs: [],
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b5061212c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c8063d53482cf11610076578063ee0aa3201161005b578063ee0aa320146101b1578063f58ae2ce146101d7578063f8a8fd6d146101ea57600080fd5b8063d53482cf1461016d578063df1c3a5b1461019057600080fd5b8063070e81f1146100a8578063103c5200146100d15780637f99d7af146100f2578063c318eeda14610112575b600080fd5b6100bb6100b6366004610f7c565b61022f565b6040516100c89190611119565b60405180910390f35b6100e46100df366004610f7c565b610242565b6040516100c8929190611221565b610105610100366004610f7c565b6102bd565b6040516100c8919061124f565b610125610120366004610f7c565b610319565b6040805173ffffffffffffffffffffffffffffffffffffffff96871681526020810195909552928516928401929092529092166060820152608081019190915260a0016100c8565b61018061017b3660046112a7565b6105bf565b60405190151581526020016100c8565b6101a361019e366004610f7c565b6107be565b6040519081526020016100c8565b6101c46101bf366004610f7c565b610838565b6040516100c89796959493929190611370565b6101806101e53660046113ce565b6108f3565b60005461020a9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100c8565b606061023b8383610dea565b9392505050565b604080516101408101825260008082526060602083018190529282018390528282018190526080820181905260a0820181905260c0820181905260e0820181905261010082018190526101208201529061029c8484610e0e565b9150816101000151156102b6576102b38484610dea565b90505b9250929050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915261023b8383610e0e565b6000808080806101e4861161035a576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6060600061036b6004828a8c611468565b61037491611492565b90507fffffffff0000000000000000000000000000000000000000000000000000000081167f4666fc8000000000000000000000000000000000000000000000000000000000148061040757507fffffffff0000000000000000000000000000000000000000000000000000000081167f733214a300000000000000000000000000000000000000000000000000000000145b8061045357507fffffffff0000000000000000000000000000000000000000000000000000000081167faf7060fd00000000000000000000000000000000000000000000000000000000145b1561051f5760408051600180825281830190925290816020015b6040805160e0810182526000808252602080830182905292820181905260608083018290526080830182905260a083015260c082015282527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90920191018161046d5790505091506104e2886004818c611468565b8101906104ef9190611720565b87519295509093509150859060009061050a5761050a6117cf565b60209081029190910101529095509250610544565b61052c886004818c611468565b810190610539919061189d565b919950965094505050505b81600081518110610557576105576117cf565b602002602001015160400151965081600081518110610578576105786117cf565b60200260200101516080015195508160018351610595919061193f565b815181106105a5576105a56117cf565b602002602001015160600151935050509295509295909350565b6000806105cc8c8c610e0e565b905060008a8a6040516020016105e3929190611979565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152828252805160209182012060008452908301918290529151902090915081148061066157508082602001516040516020016106499190611989565b60405160208183030381529060405280519060200120145b80156106bb575073ffffffffffffffffffffffffffffffffffffffff808a1614806106bb57508873ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16145b8015610715575073ffffffffffffffffffffffffffffffffffffffff808916148061071557508773ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff16145b801561074d57507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff87148061074d5750868260c00151145b801561078557507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8614806107855750858260e00151145b801561079957508415158261010001511515145b80156107ad57508315158261012001511515145b9d9c50505050505050505050505050565b60008083838080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293506108079250869150859050610e0e565b6101000151156108235760648101518101602401519150610831565b604481015181016024015191505b5092915050565b6060600080600080600080600061084f8a8a610e0e565b9050806101000151156108b25760006108688b8b610dea565b90508060008151811061087d5761087d6117cf565b60200260200101516040015197508060008151811061089e5761089e6117cf565b6020026020010151608001519550506108c1565b806080015196508060c0015194505b602081015160a082015160e083015161010084015161012090940151929d999c50909a50959850949690955092505050565b600080610903600482898b611468565b61090c91611492565b90507feb2acf89000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008216016109f5576000610966886004818c611468565b8101906109739190611c1a565b915050806020015160a00151805190602001208585604051610996929190611979565b60405180910390201480156109ec57506109ec87878080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050506020838101510151610e7a565b92505050610de0565b7f59fef59a000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610a7e576000610a4d886004818c611468565b810190610a5a9190611c7e565b92505050806020015160a00151805190602001208585604051610996929190611979565b7ffaf6a213000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610b40576000610ad6886004818c611468565b810190610ae39190611dd9565b9150508060600151805190602001208585604051610b02929190611979565b60405180910390201480156109ec57508060400151805190602001208787604051610b2e929190611979565b60405180910390201492505050610de0565b7f4f93ad26000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610bc5576000610b98886004818c611468565b810190610ba59190611e33565b925050508060600151805190602001208585604051610b02929190611979565b7fd733bcea000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610ca4576000610c1d886004818c611468565b810190610c2a9190611f8f565b915050806101200151805190602001208585604051610c4a929190611979565b60405180910390201480156109ec575080516040805173ffffffffffffffffffffffffffffffffffffffff909216602083015201604051602081830303815290604052805190602001208787604051610b2e929190611979565b7fd77cd343000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610d2a576000610cfc886004818c611468565b810190610d099190611fe9565b92505050806101200151805190602001208585604051610c4a929190611979565b7fd733bcea000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610d82576000610c1d886004818c611468565b7fd77cd343000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610dda576000610cfc886004818c611468565b60009150505b9695505050505050565b6060610df98260048186611468565b810190610e069190612067565b949350505050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810191909152610e6d8260048186611468565b81019061023b91906120c1565b6000601483511015610f12576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f496e76616c69642063616c6c546f206c656e6774683b2065787065637465642060448201527f6174206c65617374203230206279746573000000000000000000000000000000606482015260840160405180910390fd5b50602082015173ffffffffffffffffffffffffffffffffffffffff8281169116145b92915050565b60008083601f840112610f4c57600080fd5b50813567ffffffffffffffff811115610f6457600080fd5b6020830191508360208285010111156102b657600080fd5b60008060208385031215610f8f57600080fd5b823567ffffffffffffffff811115610fa657600080fd5b610fb285828601610f3a565b90969095509350505050565b60005b83811015610fd9578181015183820152602001610fc1565b50506000910152565b60008151808452610ffa816020860160208601610fbe565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600082825180855260208086019550808260051b84010181860160005b8481101561110c577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08684030189528151805173ffffffffffffffffffffffffffffffffffffffff908116855285820151811686860152604080830151821690860152606080830151909116908501526080808201519085015260a08082015160e082870181905291906110df83880182610fe2565b9250505060c08083015192506110f88187018415159052565b509985019993505090830190600101611049565b5090979650505050505050565b60208152600061023b602083018461102c565b600061014082518452602083015181602086015261114c82860182610fe2565b915050604083015184820360408601526111668282610fe2565b9150506060830151611190606086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060808301516111b8608086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060a08301516111e060a086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060c083015160c085015260e083015160e0850152610100808401516112098287018215159052565b50506101209283015115159390920192909252919050565b604081526000611234604083018561112c565b8281036020840152611246818561102c565b95945050505050565b60208152600061023b602083018461112c565b73ffffffffffffffffffffffffffffffffffffffff8116811461128457600080fd5b50565b803561129281611262565b919050565b8035801515811461129257600080fd5b6000806000806000806000806000806101008b8d0312156112c757600080fd5b8a3567ffffffffffffffff808211156112df57600080fd5b6112eb8e838f01610f3a565b909c509a5060208d013591508082111561130457600080fd5b506113118d828e01610f3a565b90995097505060408b013561132581611262565b955060608b013561133581611262565b945060808b0135935060a08b0135925061135160c08c01611297565b915061135f60e08c01611297565b90509295989b9194979a5092959850565b60e08152600061138360e083018a610fe2565b73ffffffffffffffffffffffffffffffffffffffff988916602084015296909716604082015260608101949094526080840192909252151560a0830152151560c09091015292915050565b600080600080600080606087890312156113e757600080fd5b863567ffffffffffffffff808211156113ff57600080fd5b61140b8a838b01610f3a565b9098509650602089013591508082111561142457600080fd5b6114308a838b01610f3a565b9096509450604089013591508082111561144957600080fd5b5061145689828a01610f3a565b979a9699509497509295939492505050565b6000808585111561147857600080fd5b8386111561148557600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156114d25780818660040360031b1b83161692505b505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff8111828210171561152c5761152c6114da565b60405290565b604051610140810167ffffffffffffffff8111828210171561152c5761152c6114da565b6040516080810167ffffffffffffffff8111828210171561152c5761152c6114da565b60405160c0810167ffffffffffffffff8111828210171561152c5761152c6114da565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156115e3576115e36114da565b604052919050565b600082601f8301126115fc57600080fd5b813567ffffffffffffffff811115611616576116166114da565b61164760207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160161159c565b81815284602083860101111561165c57600080fd5b816020850160208301376000918101602001919091529392505050565b600060e0828403121561168b57600080fd5b611693611509565b905061169e82611287565b81526116ac60208301611287565b60208201526116bd60408301611287565b60408201526116ce60608301611287565b60608201526080820135608082015260a082013567ffffffffffffffff8111156116f757600080fd5b611703848285016115eb565b60a08301525061171560c08301611297565b60c082015292915050565b60008060008060008060c0878903121561173957600080fd5b86359550602087013567ffffffffffffffff8082111561175857600080fd5b6117648a838b016115eb565b9650604089013591508082111561177a57600080fd5b6117868a838b016115eb565b95506060890135915061179882611262565b9093506080880135925060a088013590808211156117b557600080fd5b506117c289828a01611679565b9150509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082601f83011261180f57600080fd5b8135602067ffffffffffffffff8083111561182c5761182c6114da565b8260051b61183b83820161159c565b938452858101830193838101908886111561185557600080fd5b84880192505b85831015611891578235848111156118735760008081fd5b6118818a87838c0101611679565b835250918401919084019061185b565b98975050505050505050565b60008060008060008060c087890312156118b657600080fd5b86359550602087013567ffffffffffffffff808211156118d557600080fd5b6118e18a838b016115eb565b965060408901359150808211156118f757600080fd5b6119038a838b016115eb565b95506060890135915061191582611262565b9093506080880135925060a0880135908082111561193257600080fd5b506117c289828a016117fe565b81810381811115610f34577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8183823760009101908152919050565b6000825161199b818460208701610fbe565b9190910192915050565b600061014082840312156119b857600080fd5b6119c0611532565b905081358152602082013567ffffffffffffffff808211156119e157600080fd5b6119ed858386016115eb565b60208401526040840135915080821115611a0657600080fd5b50611a13848285016115eb565b604083015250611a2560608301611287565b6060820152611a3660808301611287565b6080820152611a4760a08301611287565b60a082015260c082013560c082015260e082013560e0820152610100611a6e818401611297565b90820152610120611a80838201611297565b9082015292915050565b803563ffffffff8116811461129257600080fd5b600060408284031215611ab057600080fd5b6040516040810181811067ffffffffffffffff82111715611ad357611ad36114da565b604052823581526020928301359281019290925250919050565b600060a08284031215611aff57600080fd5b611b07611556565b9050813561ffff81168114611b1b57600080fd5b8152602082013567ffffffffffffffff80821115611b3857600080fd5b9083019060e08286031215611b4c57600080fd5b611b54611509565b611b5d83611a8a565b8152602083013560208201526040830135604082015260608301356060820152608083013582811115611b8f57600080fd5b611b9b878286016115eb565b60808301525060a083013582811115611bb357600080fd5b611bbf878286016115eb565b60a08301525060c083013582811115611bd757600080fd5b611be3878286016115eb565b60c083015250602084015250611bfe90508360408401611a9e565b6040820152611c0f60808301611287565b606082015292915050565b60008060408385031215611c2d57600080fd5b823567ffffffffffffffff80821115611c4557600080fd5b611c51868387016119a5565b93506020850135915080821115611c6757600080fd5b50611c7485828601611aed565b9150509250929050565b600080600060608486031215611c9357600080fd5b833567ffffffffffffffff80821115611cab57600080fd5b611cb7878388016119a5565b94506020860135915080821115611ccd57600080fd5b611cd9878388016117fe565b93506040860135915080821115611cef57600080fd5b50611cfc86828701611aed565b9150509250925092565b803567ffffffffffffffff8116811461129257600080fd5b80356007811061129257600080fd5b600060c08284031215611d3f57600080fd5b611d47611579565b9050611d5282611a8a565b8152611d6060208301611d06565b6020820152604082013567ffffffffffffffff80821115611d8057600080fd5b611d8c858386016115eb565b60408401526060840135915080821115611da557600080fd5b50611db2848285016115eb565b60608301525060808201356080820152611dce60a08301611d1e565b60a082015292915050565b60008060408385031215611dec57600080fd5b823567ffffffffffffffff80821115611e0457600080fd5b611e10868387016119a5565b93506020850135915080821115611e2657600080fd5b50611c7485828601611d2d565b600080600060608486031215611e4857600080fd5b833567ffffffffffffffff80821115611e6057600080fd5b611e6c878388016119a5565b94506020860135915080821115611e8257600080fd5b611e8e878388016117fe565b93506040860135915080821115611ea457600080fd5b50611cfc86828701611d2d565b60006101408284031215611ec457600080fd5b611ecc611532565b9050611ed782611287565b8152611ee560208301611287565b6020820152611ef660408301611287565b604082015260608201356060820152611f1160808301611d06565b6080820152611f2260a08301611287565b60a0820152611f3360c08301611a8a565b60c0820152611f4460e08301611a8a565b60e0820152610100611f57818401611a8a565b908201526101208281013567ffffffffffffffff811115611f7757600080fd5b611f83858286016115eb565b82840152505092915050565b60008060408385031215611fa257600080fd5b823567ffffffffffffffff80821115611fba57600080fd5b611fc6868387016119a5565b93506020850135915080821115611fdc57600080fd5b50611c7485828601611eb1565b600080600060608486031215611ffe57600080fd5b833567ffffffffffffffff8082111561201657600080fd5b612022878388016119a5565b9450602086013591508082111561203857600080fd5b612044878388016117fe565b9350604086013591508082111561205a57600080fd5b50611cfc86828701611eb1565b6000806040838503121561207a57600080fd5b823567ffffffffffffffff8082111561209257600080fd5b61209e868387016119a5565b935060208501359150808211156120b457600080fd5b50611c74858286016117fe565b6000602082840312156120d357600080fd5b813567ffffffffffffffff8111156120ea57600080fd5b610e06848285016119a556fea26469706673582212207f8215b55771a3158332209fbee2022408ec22e585495f6d4bedce74b1043e8c64736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var CalldataVerificationFacet__factory = /** @class */ (function (_super) {
    __extends(CalldataVerificationFacet__factory, _super);
    function CalldataVerificationFacet__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (isSuperArgs(args)) {
            _this = _super.apply(this, args) || this;
        }
        else {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        return _this;
    }
    CalldataVerificationFacet__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    CalldataVerificationFacet__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    CalldataVerificationFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    CalldataVerificationFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    CalldataVerificationFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    CalldataVerificationFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    CalldataVerificationFacet__factory.bytecode = _bytecode;
    CalldataVerificationFacet__factory.abi = _abi;
    return CalldataVerificationFacet__factory;
}(ethers_1.ContractFactory));
exports.CalldataVerificationFacet__factory = CalldataVerificationFacet__factory;
