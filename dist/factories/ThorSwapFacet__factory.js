/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { utils, Contract, ContractFactory } from "ethers";
const _abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_thorchainRouter",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "startBridgeTokensViaThorSwap",
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
                name: "_thorSwapData",
                type: "tuple",
                internalType: "struct ThorSwapFacet.ThorSwapData",
                components: [
                    {
                        name: "vault",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "memo",
                        type: "string",
                        internalType: "string",
                    },
                    {
                        name: "expiration",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "swapAndStartBridgeTokensViaThorSwap",
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
                name: "_thorSwapData",
                type: "tuple",
                internalType: "struct ThorSwapFacet.ThorSwapData",
                components: [
                    {
                        name: "vault",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "memo",
                        type: "string",
                        internalType: "string",
                    },
                    {
                        name: "expiration",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "event",
        name: "AssetSwapped",
        inputs: [
            {
                name: "transactionId",
                type: "bytes32",
                indexed: false,
                internalType: "bytes32",
            },
            {
                name: "dex",
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
        name: "BridgeToNonEVMChain",
        inputs: [
            {
                name: "transactionId",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
            {
                name: "destinationChainId",
                type: "uint256",
                indexed: true,
                internalType: "uint256",
            },
            {
                name: "receiver",
                type: "bytes",
                indexed: false,
                internalType: "bytes",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "BridgeToNonEVMChainBytes32",
        inputs: [
            {
                name: "transactionId",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
            {
                name: "destinationChainId",
                type: "uint256",
                indexed: true,
                internalType: "uint256",
            },
            {
                name: "receiver",
                type: "bytes32",
                indexed: false,
                internalType: "bytes32",
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
        name: "DeprecatedToken",
        inputs: [],
    },
    {
        type: "error",
        name: "InformationMismatch",
        inputs: [],
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
        name: "NullAddrIsNotAValidSpender",
        inputs: [],
    },
    {
        type: "error",
        name: "ReentrancyError",
        inputs: [],
    },
];
const _bytecode = "0x60a0604052348015600e575f5ffd5b50604051611c4d380380611c4d833981016040819052602b91603b565b6001600160a01b03166080526066565b5f60208284031215604a575f5ffd5b81516001600160a01b0381168114605f575f5ffd5b9392505050565b608051611bc86100855f395f81816105f1015261061c0152611bc85ff3fe608060405260043610610028575f3560e01c80632541ec571461002c578063ad673d8814610041575b5f5ffd5b61003f61003a36600461167d565b610054565b005b61003f61004f3660046116e2565b610279565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df34476117a8565b9050846101048160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561013b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610178576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101b5576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156101f3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610231576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024388608001518960c001516104a1565b61024d8888610555565b50479150508181111561026e5761026e5f8461026985856117a8565b61071c565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102f4576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61030434476117a8565b905086806101000151610343576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610381576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886103a48160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103db576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610418576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610455576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104698a5f01518b60c001518b8b33610751565b60c08b01526104788a88610555565b504791505081811115610494576104945f8461026985856117a8565b50505f9091555050505050565b805f036104da576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610533578034101561052f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61052f73ffffffffffffffffffffffffffffffffffffffff8316333084610893565b4660011480156105925750608082015173ffffffffffffffffffffffffffffffffffffffff16733155ba85d5f96b2d030a4966af206230e46849cb145b156105c9576040517fa6fbe3b300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015173ffffffffffffffffffffffffffffffffffffffff8116158061061a5761061a827f00000000000000000000000000000000000000000000000000000000000000008660c001516108eb565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166344bc937b82610661575f610667565b8560c001515b61067460208701876117e0565b608088015160c089015161068b60208a018a611800565b8a604001356040518863ffffffff1660e01b81526004016106b196959493929190611868565b5f604051808303818588803b1580156106c8575f5ffd5b505af11580156106da573d5f5f3e3d5ffd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18460405161070e919061194a565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff8316610746576107418282610917565b505050565b610741838383610984565b5f8280820361078c576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561079a6001856117a8565b8181106107a9576107a9611a5d565b90506020028101906107bb9190611a8a565b6107cc9060808101906060016117e0565b90505f6107d8826109f2565b905073ffffffffffffffffffffffffffffffffffffffff8216610802576107ff34826117a8565b90505b5f61080d8888610a3c565b90506108198888610b46565b6108268a89898985610bb2565b5f82610831856109f2565b61083b91906117a8565b905089811015610885576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166108de57637939f4245f526004601cfd5b5f60605260405250505050565b6107418383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610d74565b73ffffffffffffffffffffffffffffffffffffffff8216610964576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61052f73ffffffffffffffffffffffffffffffffffffffff831682610ea1565b73ffffffffffffffffffffffffffffffffffffffff82166109d1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61074173ffffffffffffffffffffffffffffffffffffffff84168383610eba565b5f73ffffffffffffffffffffffffffffffffffffffff821615610a3457610a2f73ffffffffffffffffffffffffffffffffffffffff831630610f03565b610a36565b475b92915050565b6060815f8167ffffffffffffffff811115610a5957610a59611448565b604051908082528060200260200182016040528015610a82578160200160208202803683370190505b5090505f5f5b83811015610b3b57868682818110610aa257610aa2611a5d565b9050602002810190610ab49190611a8a565b610ac59060808101906060016117e0565b9150610ad0826109f2565b838281518110610ae257610ae2611a5d565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610b335734838281518110610b1b57610b1b611a5d565b60200260200101818151610b2f91906117a8565b9052505b600101610a88565b509095945050505050565b5f5b818110156107415736838383818110610b6357610b63611a5d565b9050602002810190610b759190611a8a565b9050610b8760e0820160c08301611ac6565b15610ba957610ba9610b9f60608301604084016117e0565b82608001356104a1565b50600101610b48565b83838383825f5b81811015610d5a57368a8a83818110610bd457610bd4611a5d565b9050602002810190610be69190611a8a565b9050610c15610bfb60608301604084016117e0565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610c775750610c77610c2e60408301602084016117e0565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610c8e5750610c8e610c2e60208301836117e0565b8015610d115750610d11610ca560a0830183611800565b610cb3916004915f91611adf565b610cbc91611b06565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610d47576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d518c82610f36565b50600101610bb9565b5050610d69848484845f6111a9565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841615610e9b5773ffffffffffffffffffffffffffffffffffffffff8316610ddd576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015610e50573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610e749190611b6c565b1015610e9b57610e9b73ffffffffffffffffffffffffffffffffffffffff851684836113c0565b50505050565b5f385f3884865af161052f5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610efa576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b610f4e610f4660208301836117e0565b6017903b1190565b610f84576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003610fc3576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610fd7610bfb60608501604086016117e0565b610fe1575f610fe7565b82608001355b90505f611002610ffd60808601606087016117e0565b6109f2565b9050815f036110385761103861101e60608601604087016117e0565b61102e60408701602088016117e0565b86608001356108eb565b5f8061104760208701876117e0565b73ffffffffffffffffffffffffffffffffffffffff168461106b60a0890189611800565b604051611079929190611b83565b5f6040518083038185875af1925050503d805f81146110b3576040519150601f19603f3d011682016040523d82523d5f602084013e6110b8565b606091505b5091509150816110cb576110cb8161143e565b5f6110df610ffd6080890160608a016117e0565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861111060208a018a6117e0565b61112060608b0160408c016117e0565b61113060808c0160608d016117e0565b8b60800135898711611142578661114c565b61114c8a886117a8565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826111b86001826117a8565b8181106111c7576111c7611a5d565b90506020028101906111d99190611a8a565b6111ea9060808101906060016117e0565b90505f5f5f5f5f5f5f5b888110156113b05761120760018a6117a8565b81108015611216575088600114155b156112f1578d8d8281811061122d5761122d611a5d565b905060200281019061123f9190611a8a565b6112509060808101906060016117e0565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146112f1578a818151811061129757611297611a5d565b60200260200101516112a8876109f2565b6112b291906117a8565b965073ffffffffffffffffffffffffffffffffffffffff8616156112d6575f6112d8565b895b9350838711156112f1576112f1868d610269878b6117a8565b8d8d8281811061130357611303611a5d565b90506020028101906113159190611a8a565b6113269060608101906040016117e0565b9450611331856109f2565b925073ffffffffffffffffffffffffffffffffffffffff851615611355575f611357565b895b9150818311801561139457508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156113a8576113a8858d61026985876117a8565b6001016111f4565b5050505050505050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716610efa575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716610efa57633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561149957611499611448565b60405290565b5f82601f8301126114ae575f5ffd5b813567ffffffffffffffff8111156114c8576114c8611448565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff8111828210171561151557611515611448565b60405281815283820160200185101561152c575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461156b575f5ffd5b919050565b8035801515811461156b575f5ffd5b5f6101408284031215611590575f5ffd5b611598611475565b823581529050602082013567ffffffffffffffff8111156115b7575f5ffd5b6115c38482850161149f565b602083015250604082013567ffffffffffffffff8111156115e2575f5ffd5b6115ee8482850161149f565b60408301525061160060608301611548565b606082015261161160808301611548565b608082015261162260a08301611548565b60a082015260c0828101359082015260e080830135908201526116486101008301611570565b61010082015261165b6101208301611570565b61012082015292915050565b5f60608284031215611677575f5ffd5b50919050565b5f5f6040838503121561168e575f5ffd5b823567ffffffffffffffff8111156116a4575f5ffd5b6116b08582860161157f565b925050602083013567ffffffffffffffff8111156116cc575f5ffd5b6116d885828601611667565b9150509250929050565b5f5f5f5f606085870312156116f5575f5ffd5b843567ffffffffffffffff81111561170b575f5ffd5b6117178782880161157f565b945050602085013567ffffffffffffffff811115611733575f5ffd5b8501601f81018713611743575f5ffd5b803567ffffffffffffffff811115611759575f5ffd5b8760208260051b840101111561176d575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611790575f5ffd5b61179c87828801611667565b91505092959194509250565b81810381811115610a36577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f602082840312156117f0575f5ffd5b6117f982611548565b9392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611833575f5ffd5b83018035915067ffffffffffffffff82111561184d575f5ffd5b602001915036819003821315611861575f5ffd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff8716815273ffffffffffffffffffffffffffffffffffffffff8616602082015284604082015260a060608201528260a0820152828460c08301375f60c084830101525f60c07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8601168301019050826080830152979650505050505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526119716101608401826118fe565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526119ac82826118fe565b91505060608401516119d6608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611a4561012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611abc575f5ffd5b9190910192915050565b5f60208284031215611ad6575f5ffd5b6117f982611570565b5f5f85851115611aed575f5ffd5b83861115611af9575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611b65577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215611b7c575f5ffd5b5051919050565b818382375f910190815291905056fea2646970667358221220d89800aa951822d501ac223f0ca9e47016e034493a11b9b6870ecdd229c5424964736f6c634300081d0033";
const isSuperArgs = (xs) => xs.length > 1;
export class ThorSwapFacet__factory extends ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_thorchainRouter, overrides) {
        return super.deploy(_thorchainRouter, overrides || {});
    }
    getDeployTransaction(_thorchainRouter, overrides) {
        return super.getDeployTransaction(_thorchainRouter, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static bytecode = _bytecode;
    static abi = _abi;
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
