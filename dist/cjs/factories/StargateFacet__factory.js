"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StargateFacet__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_composer",
                type: "address",
                internalType: "contract IStargateRouter",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "initStargate",
        inputs: [
            {
                name: "chainIdConfigs",
                type: "tuple[]",
                internalType: "struct StargateFacet.ChainIdConfig[]",
                components: [
                    {
                        name: "chainId",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "layerZeroChainId",
                        type: "uint16",
                        internalType: "uint16",
                    },
                ],
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "quoteLayerZeroFee",
        inputs: [
            {
                name: "_destinationChainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_stargateData",
                type: "tuple",
                internalType: "struct StargateFacet.StargateData",
                components: [
                    {
                        name: "srcPoolId",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "dstPoolId",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "minAmountLD",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "dstGasForCall",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "lzFee",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "refundAddress",
                        type: "address",
                        internalType: "address payable",
                    },
                    {
                        name: "callTo",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "callData",
                        type: "bytes",
                        internalType: "bytes",
                    },
                ],
            },
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
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
        name: "setLayerZeroChainId",
        inputs: [
            {
                name: "_chainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_layerZeroChainId",
                type: "uint16",
                internalType: "uint16",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "startBridgeTokensViaStargate",
        inputs: [
            {
                name: "_bridgeData",
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
                name: "_stargateData",
                type: "tuple",
                internalType: "struct StargateFacet.StargateData",
                components: [
                    {
                        name: "srcPoolId",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "dstPoolId",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "minAmountLD",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "dstGasForCall",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "lzFee",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "refundAddress",
                        type: "address",
                        internalType: "address payable",
                    },
                    {
                        name: "callTo",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "callData",
                        type: "bytes",
                        internalType: "bytes",
                    },
                ],
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "swapAndStartBridgeTokensViaStargate",
        inputs: [
            {
                name: "_bridgeData",
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
                name: "_swapData",
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
            {
                name: "_stargateData",
                type: "tuple",
                internalType: "struct StargateFacet.StargateData",
                components: [
                    {
                        name: "srcPoolId",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "dstPoolId",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "minAmountLD",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "dstGasForCall",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "lzFee",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "refundAddress",
                        type: "address",
                        internalType: "address payable",
                    },
                    {
                        name: "callTo",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "callData",
                        type: "bytes",
                        internalType: "bytes",
                    },
                ],
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "event",
        name: "LayerZeroChainIdSet",
        inputs: [
            {
                name: "chainId",
                type: "uint256",
                indexed: true,
                internalType: "uint256",
            },
            {
                name: "layerZeroChainId",
                type: "uint16",
                indexed: false,
                internalType: "uint16",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "LiFiGenericSwapCompleted",
        inputs: [
            {
                name: "transactionId",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
            {
                name: "integrator",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "referrer",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "receiver",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "fromAssetId",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "toAssetId",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "fromAmount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "toAmount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "LiFiSwappedGeneric",
        inputs: [
            {
                name: "transactionId",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
            {
                name: "integrator",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "referrer",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "fromAssetId",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "toAssetId",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "fromAmount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "toAmount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "LiFiTransferCompleted",
        inputs: [
            {
                name: "transactionId",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
            {
                name: "receivingAssetId",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "receiver",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "timestamp",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "LiFiTransferRecovered",
        inputs: [
            {
                name: "transactionId",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
            {
                name: "receivingAssetId",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "receiver",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "timestamp",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "LiFiTransferStarted",
        inputs: [
            {
                name: "bridgeData",
                type: "tuple",
                indexed: false,
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
        anonymous: false,
    },
    {
        type: "event",
        name: "PartnerSwap",
        inputs: [
            {
                name: "partnerId",
                type: "bytes2",
                indexed: false,
                internalType: "bytes2",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "StargateInitialized",
        inputs: [
            {
                name: "chainIdConfigs",
                type: "tuple[]",
                indexed: false,
                internalType: "struct StargateFacet.ChainIdConfig[]",
                components: [
                    {
                        name: "chainId",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "layerZeroChainId",
                        type: "uint16",
                        internalType: "uint16",
                    },
                ],
            },
        ],
        anonymous: false,
    },
    {
        type: "error",
        name: "CannotBridgeToSameNetwork",
        inputs: [],
    },
    {
        type: "error",
        name: "ContractCallNotAllowed",
        inputs: [],
    },
    {
        type: "error",
        name: "CumulativeSlippageTooHigh",
        inputs: [
            {
                name: "minAmount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "receivedAmount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
    {
        type: "error",
        name: "InformationMismatch",
        inputs: [],
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
        name: "InvalidContract",
        inputs: [],
    },
    {
        type: "error",
        name: "InvalidReceiver",
        inputs: [],
    },
    {
        type: "error",
        name: "NativeAssetTransferFailed",
        inputs: [],
    },
    {
        type: "error",
        name: "NoSwapDataProvided",
        inputs: [],
    },
    {
        type: "error",
        name: "NoSwapFromZeroBalance",
        inputs: [],
    },
    {
        type: "error",
        name: "NoTransferToNullAddress",
        inputs: [],
    },
    {
        type: "error",
        name: "NotInitialized",
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
    {
        type: "error",
        name: "OnlyContractOwner",
        inputs: [],
    },
    {
        type: "error",
        name: "ReentrancyError",
        inputs: [],
    },
    {
        type: "error",
        name: "UnknownLayerZeroChain",
        inputs: [],
    },
];
const _bytecode = "0x60a06040523480156200001157600080fd5b50604051620030d1380380620030d1833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051613028620000a96000396000818161044201528181610ac401528181610bfc0152610c2701526130286000f3fe60806040526004361061005a5760003560e01c8063c07386e611610043578063c07386e614610094578063d35794fd146100cd578063ed178619146100ed57600080fd5b8063023f34ae1461005f578063be1eace714610081575b600080fd5b34801561006b57600080fd5b5061007f61007a366004612514565b610100565b005b61007f61008f3660046125a2565b610226565b3480156100a057600080fd5b506100b46100af36600461260f565b61043d565b6040805192835260208301919091520160405180910390f35b3480156100d957600080fd5b5061007f6100e8366004612663565b610563565b61007f6100fb3660046128c1565b61065e565b61010861085b565b7f9b4904af2e3a5a663a124b6779de3b00b6ac3688e684b4f29f104a97ff62bf5d60005b828110156101b85783838281811061014657610146612980565b905060400201602001602081019061015e91906129af565b82600086868581811061017357610173612980565b90506040020160000135815260200190815260200160002060006101000a81548161ffff021916908361ffff16021790555080806101b0906129f9565b91505061012c565b50600181810180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690911790556040517f1312bdf143ed16255aacc1dd4f17486d8c39e7efcfa4aa1d9e821629ff203b8d906102199085908590612a31565b60405180910390a1505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102a1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006102b23447612a83565b90506102bd85612a96565b806101000151156102fa576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61030386612a96565b60a081015173ffffffffffffffffffffffffffffffffffffffff16610354576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610392576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103cf576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103e16103db88612a96565b876108d0565b6103fe6103f460a0890160808a01612aa2565b8860c00135610927565b61041061040a88612a96565b87610aa3565b50479050818111156104315761043160008461042c8585612a83565b610dcb565b50506000909155505050565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16630a51236961048586610dfc565b600161049460c0880188612abf565b6104a160e08a018a612abf565b60408051606080820183528d013581526000602080830182905283519081019190915282518082036014018152603490910183528183015290517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b1681526105179796959493929190600401612c04565b6040805180830381865afa158015610533573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105579190612c60565b915091505b9250929050565b61056b61085b565b7f9b4904af2e3a5a663a124b6779de3b00b6ac3688e684b4f29f104a97ff62bf5e547f9b4904af2e3a5a663a124b6779de3b00b6ac3688e684b4f29f104a97ff62bf5d9060ff166105e8576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000838152602082815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00001661ffff8616908117909155915191825284917fa51f0b4ec175b5bcd05e1dfff3bac4a47454a5b2bae58e440c736a77f6117cb7910160405180910390a2505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016106d9576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006106ea3447612a83565b905086806101000151610729576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8761074c8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610783576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036107c1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036107fe576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61080889876108d0565b61082289600001518a60c001518a8a338b60800135610e70565b60c08a01526108318987610aa3565b504790508181111561084d5761084d60008461042c8585612a83565b505060009091555050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff1633146108ce576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b610120820151151560006108e760e0840184612abf565b905011151514610923576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003610961576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166109b65780341015610923576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610a23573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a479190612c84565b905081811015610a92576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b610a9e8333308561100b565b505050565b608082015173ffffffffffffffffffffffffffffffffffffffff16610bf2577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e622688982608001358460c00151610b129190612c9d565b610b1f8560e00151610dfc565b610b2f60c0860160a08701612aa2565b610b3c60c0870187612abf565b60408051808201825260c08b01518152898201356020808301919091528251606080820185528c01358152600081830181905284519283015283516014818403018152603490920184529192820152610b9860e08b018b612abf565b6040518a63ffffffff1660e01b8152600401610bbb989796959493929190612cb0565b6000604051808303818588803b158015610bd457600080fd5b505af1158015610be8573d6000803e3d6000fd5b5050505050610d3e565b610c2582608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151611225565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16639fbf10fc8260800135610c738560e00151610dfc565b84356020860135610c8a60c0880160a08901612aa2565b60c089015160408051606080820183528b01358152600060208083018290528351908101919091528251601481830301815260349091018352828c013592820152610cd860c08c018c612abf565b610ce560e08e018e612abf565b6040518d63ffffffff1660e01b8152600401610d0b9b9a99989796959493929190612d31565b6000604051808303818588803b158015610d2457600080fd5b505af1158015610d38573d6000803e3d6000fd5b50505050505b6040517e0600000000000000000000000000000000000000000000000000000000000081527f85ce809fd9fd62b920fadc9d3a3a8e642d3969bf635276bfbdde866acce409fc9060200160405180910390a17fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610dbf9190612dc0565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff831615610df257610a9e83838361135c565b610a9e82826114de565b60008181527f9b4904af2e3a5a663a124b6779de3b00b6ac3688e684b4f29f104a97ff62bf5d6020819052604082205461ffff16808303610e69576040517f7c152fe300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b9392505050565b600083808203610eac576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008686610ebb600185612a83565b818110610eca57610eca612980565b9050602002810190610edc9190612ed3565b610eed906080810190606001612aa2565b90506000610efa82611608565b905073ffffffffffffffffffffffffffffffffffffffff8216610f2457610f213482612a83565b90505b6000610f3089896116c1565b9050610f3c89896117cd565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610f77818b8b8561183a565b600083610f8386611608565b610f8d9190612a83565b905073ffffffffffffffffffffffffffffffffffffffff8516610fb757610fb48882612a83565b90505b8b811015610ffb576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d905260248101829052604401610a89565b9c9b505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416611058576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166110a5576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611116573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061113a9190612c84565b905061114882868686611c2b565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156111b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111dc9190612c84565b6111e69190612a83565b1461121d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661124557505050565b73ffffffffffffffffffffffffffffffffffffffff8216611292576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611307573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061132b9190612c84565b1015610a9e57610a9e83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611d07565b73ffffffffffffffffffffffffffffffffffffffff83166113a9576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166113f6576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611463573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114879190612c84565b9050808211156114cd576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610a89565b6114d8848484611df7565b50505050565b73ffffffffffffffffffffffffffffffffffffffff821661152b576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561156e576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610a89565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146115c8576040519150601f19603f3d011682016040523d82523d6000602084013e6115cd565b606091505b5050905080610a9e576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff8216156116b9576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015611690573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116b49190612c84565b6116bb565b475b92915050565b60608160008167ffffffffffffffff8111156116df576116df61268f565b604051908082528060200260200182016040528015611708578160200160208202803683370190505b5090506000805b838110156117c25786868281811061172957611729612980565b905060200281019061173b9190612ed3565b61174c906080810190606001612aa2565b915061175782611608565b83828151811061176957611769612980565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166117ba57348382815181106117a2576117a2612980565b602002602001018181516117b69190612a83565b9052505b60010161170f565b509095945050505050565b60005b81811015610a9e57368383838181106117eb576117eb612980565b90506020028101906117fd9190612ed3565b905061180f60e0820160c08301612f11565b15611831576118316118276060830160408401612aa2565b8260800135610927565b506001016117d0565b602084015160408501518491849184908360018114611b445760008686611862600185612a83565b81811061187157611871612980565b90506020028101906118839190612ed3565b611894906080810190606001612aa2565b9050600089815b81811015611a4157368d8d838181106118b6576118b6612980565b90506020028101906118c89190612ed3565b90506118f76118dd6060830160408401612aa2565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061195a575061195a6119106040830160208401612aa2565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561197157506119716119106020830183612aa2565b80156119f657506119f661198860a0830183612abf565b61199791600491600091612f2e565b6119a091612f58565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611a2c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e51611a389082611e4d565b5060010161189b565b505060005b611a51600185612a83565b811015611b3c576000898983818110611a6c57611a6c612980565b9050602002810190611a7e9190612ed3565b611a8f906080810190606001612aa2565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611b3357868281518110611ad657611ad6612980565b6020026020010151611ae782611608565b611af19190612a83565b9250600073ffffffffffffffffffffffffffffffffffffffff821615611b18576000611b1a565b865b90508315611b3157611b31828a61042c8488612a83565b505b50600101611a46565b505050611c1f565b8760005b81811015611c1c57368b8b83818110611b6357611b63612980565b9050602002810190611b759190612ed3565b9050611b8a6118dd6060830160408401612aa2565b80611ba35750611ba36119106040830160208401612aa2565b8015611bba5750611bba6119106020830183612aa2565b8015611bd15750611bd161198860a0830183612abf565b611c07576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c51611c139082611e4d565b50600101611b48565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526114d89085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261212b565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052611d93848261223a565b6114d85760405173ffffffffffffffffffffffffffffffffffffffff8416602482015260006044820152611ded9085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611c85565b6114d8848261212b565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610a9e9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611c85565b611e63611e5d6020830183612aa2565b3b151590565b611e99576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611ed9576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611eee6118dd6060850160408601612aa2565b611ef9576000611eff565b82608001355b90506000611f1b611f166060860160408701612aa2565b611608565b90506000611f32611f166080870160608801612aa2565b905082600003611f6957611f69611f4f6060870160408801612aa2565b611f5f6040880160208901612aa2565b8760800135611225565b8460800135821015611fb4576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610a89565b600080611fc46020880188612aa2565b73ffffffffffffffffffffffffffffffffffffffff1685611fe860a08a018a612abf565b604051611ff6929190612fa0565b60006040518083038185875af1925050503d8060008114612033576040519150601f19603f3d011682016040523d82523d6000602084013e612038565b606091505b50915091508161204b5761204b816122fb565b6000612060611f1660808a0160608b01612aa2565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961209160208b018b612aa2565b6120a160608c0160408d01612aa2565b6120b160808d0160608e01612aa2565b8c608001358987116120c357866120cd565b6120cd8a88612a83565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b600061218d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166123059092919063ffffffff16565b90508051600014806121ae5750808060200190518101906121ae9190612fb0565b610a9e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610a89565b60008060008473ffffffffffffffffffffffffffffffffffffffff16846040516122649190612fcd565b6000604051808303816000865af19150503d80600081146122a1576040519150601f19603f3d011682016040523d82523d6000602084013e6122a6565b606091505b50915091508180156122d05750805115806122d05750808060200190518101906122d09190612fb0565b80156122f2575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b8051602082018181fd5b6060612314848460008561231c565b949350505050565b6060824710156123ae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610a89565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516123d79190612fcd565b60006040518083038185875af1925050503d8060008114612414576040519150601f19603f3d011682016040523d82523d6000602084013e612419565b606091505b509150915061242a87838387612435565b979650505050505050565b606083156124cb5782516000036124c45773ffffffffffffffffffffffffffffffffffffffff85163b6124c4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610a89565b5081612314565b61231483838151156124e05781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a899190612fdf565b6000806020838503121561252757600080fd5b823567ffffffffffffffff8082111561253f57600080fd5b818501915085601f83011261255357600080fd5b81358181111561256257600080fd5b8660208260061b850101111561257757600080fd5b60209290920196919550909350505050565b6000610100828403121561259c57600080fd5b50919050565b600080604083850312156125b557600080fd5b823567ffffffffffffffff808211156125cd57600080fd5b9084019061014082870312156125e257600080fd5b909250602084013590808211156125f857600080fd5b5061260585828601612589565b9150509250929050565b6000806040838503121561262257600080fd5b82359150602083013567ffffffffffffffff81111561264057600080fd5b61260585828601612589565b803561ffff8116811461265e57600080fd5b919050565b6000806040838503121561267657600080fd5b823591506126866020840161264c565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156126e2576126e261268f565b60405290565b600082601f8301126126f957600080fd5b813567ffffffffffffffff808211156127145761271461268f565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561275a5761275a61268f565b8160405283815286602085880101111561277357600080fd5b836020870160208301376000602085830101528094505050505092915050565b73ffffffffffffffffffffffffffffffffffffffff811681146127b557600080fd5b50565b803561265e81612793565b80151581146127b557600080fd5b803561265e816127c3565b600061014082840312156127ef57600080fd5b6127f76126be565b905081358152602082013567ffffffffffffffff8082111561281857600080fd5b612824858386016126e8565b6020840152604084013591508082111561283d57600080fd5b5061284a848285016126e8565b60408301525061285c606083016127b8565b606082015261286d608083016127b8565b608082015261287e60a083016127b8565b60a082015260c082013560c082015260e082013560e08201526101006128a58184016127d1565b908201526101206128b78382016127d1565b9082015292915050565b600080600080606085870312156128d757600080fd5b843567ffffffffffffffff808211156128ef57600080fd5b6128fb888389016127dc565b9550602087013591508082111561291157600080fd5b818701915087601f83011261292557600080fd5b81358181111561293457600080fd5b8860208260051b850101111561294957600080fd5b60208301955080945050604087013591508082111561296757600080fd5b5061297487828801612589565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000602082840312156129c157600080fd5b610e698261264c565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612a2a57612a2a6129ca565b5060010190565b6020808252818101839052600090604080840186845b87811015612a76578135835261ffff612a6186840161264c565b16838601529183019190830190600101612a47565b5090979650505050505050565b818103818111156116bb576116bb6129ca565b60006116bb36836127dc565b600060208284031215612ab457600080fd5b8135610e6981612793565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612af457600080fd5b83018035915067ffffffffffffffff821115612b0f57600080fd5b60200191503681900382131561055c57600080fd5b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60005b83811015612b88578181015183820152602001612b70565b50506000910152565b60008151808452612ba9816020860160208601612b6d565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b805182526020810151602083015260006040820151606060408501526123146060850182612b91565b61ffff8816815260ff8716602082015260a060408201526000612c2b60a083018789612b24565b8281036060840152612c3e818688612b24565b90508281036080840152612c528185612bdb565b9a9950505050505050505050565b60008060408385031215612c7357600080fd5b505080516020909101519092909150565b600060208284031215612c9657600080fd5b5051919050565b808201808211156116bb576116bb6129ca565b61ffff8916815273ffffffffffffffffffffffffffffffffffffffff8816602082015260e060408201526000612cea60e08301888a612b24565b865160608401526020870151608084015282810360a0840152612d0d8187612bdb565b905082810360c0840152612d22818587612b24565b9b9a5050505050505050505050565b600061012061ffff8e1683528c60208401528b604084015273ffffffffffffffffffffffffffffffffffffffff8b1660608401528960808401528860a08401528060c0840152612d8381840189612bdb565b905082810360e0840152612d98818789612b24565b9050828103610100840152612dae818587612b24565b9e9d5050505050505050505050505050565b602081528151602082015260006020830151610140806040850152612de9610160850183612b91565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152612e248382612b91565b9250506060850151612e4e608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120612ec18187018315159052565b90950151151593019290925250919050565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612f0757600080fd5b9190910192915050565b600060208284031215612f2357600080fd5b8135610e69816127c3565b60008085851115612f3e57600080fd5b83861115612f4b57600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612f985780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b600060208284031215612fc257600080fd5b8151610e69816127c3565b60008251612f07818460208701612b6d565b602081526000610e696020830184612b9156fea26469706673582212205e6281db85e032cbc22607293fbccabdb458d2ec9df4b013b303a8ec287d8a6d64736f6c63430008110033";
const isSuperArgs = (xs) => xs.length > 1;
class StargateFacet__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_composer, overrides) {
        return super.deploy(_composer, overrides || {});
    }
    getDeployTransaction(_composer, overrides) {
        return super.getDeployTransaction(_composer, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.StargateFacet__factory = StargateFacet__factory;
Object.defineProperty(StargateFacet__factory, "bytecode", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _bytecode
});
Object.defineProperty(StargateFacet__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=StargateFacet__factory.js.map