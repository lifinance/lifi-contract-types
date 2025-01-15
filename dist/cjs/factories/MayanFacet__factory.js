"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MayanFacet__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_mayan",
                type: "address",
                internalType: "contract IMayan",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "mayan",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract IMayan",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "startBridgeTokensViaMayan",
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
                name: "_mayanData",
                type: "tuple",
                internalType: "struct MayanFacet.MayanData",
                components: [
                    {
                        name: "nonEVMReceiver",
                        type: "bytes32",
                        internalType: "bytes32",
                    },
                    {
                        name: "mayanProtocol",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "protocolData",
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
        name: "swapAndStartBridgeTokensViaMayan",
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
                name: "_mayanData",
                type: "tuple",
                internalType: "struct MayanFacet.MayanData",
                components: [
                    {
                        name: "nonEVMReceiver",
                        type: "bytes32",
                        internalType: "bytes32",
                    },
                    {
                        name: "mayanProtocol",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "protocolData",
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
        name: "InvalidNonEVMReceiver",
        inputs: [
            {
                name: "expected",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "actual",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
    },
    {
        type: "error",
        name: "InvalidReceiver",
        inputs: [],
    },
    {
        type: "error",
        name: "InvalidReceiver",
        inputs: [
            {
                name: "expected",
                type: "address",
                internalType: "address",
            },
            {
                name: "actual",
                type: "address",
                internalType: "address",
            },
        ],
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
        name: "ReentrancyError",
        inputs: [],
    },
];
const _bytecode = "0x60a06040523480156200001157600080fd5b506040516200329538038062003295833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516131ed620000a860003960008181607301528181610dd801528181610e030152610ef501526131ed6000f3fe6080604052600436106100345760003560e01c806330c4895214610039578063b621b0321461004e578063bc98b5dc14610061575b600080fd5b61004c610047366004612a1a565b6100be565b005b61004c61005c366004612ad9565b6103c6565b34801561006d57600080fd5b506100957f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610139576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014a3447612b73565b905086806101000151610189576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101c7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101ea8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610221576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361025f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361029c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102b18a600001518b60c001518b8b33610626565b60c08b015260808a015160009073ffffffffffffffffffffffffffffffffffffffff161580610352578b6080015173ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610329573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034d9190612b86565b610355565b60125b60ff1691506103688c60c001518361076e565b60c08d01528061038a5761038489604001518d60c001516107ca565b60408a01525b6103948c8a610bef565b50479350505050818111156103b8576103b86000846103b38585612b73565b611021565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610441576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006104523447612b73565b9050846104778160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104ae576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104ec576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610529576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610567576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101200151156105a5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105b788608001518960c00151611057565b608088015173ffffffffffffffffffffffffffffffffffffffff166105eb576105e58860c00151601261076e565b60c08901525b6105fd886105f889612ba9565b610bef565b50479150508181111561061a5761061a6000846103b38585612b73565b50506000909155505050565b600082808203610662576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610671600185612b73565b81811061068057610680612bb5565b90506020028101906106929190612be4565b6106a3906080810190606001612c22565b905060006106b0826111cd565b905073ffffffffffffffffffffffffffffffffffffffff82166106da576106d73482612b73565b90505b60006106e68888611285565b90506106f28888611391565b6106ff8a898989856113fe565b60008261070b856111cd565b6107159190612b73565b905089811015610760576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b600060088260ff1611156107c157610787600883612c3d565b61079290600a612d76565b61079c9084612d85565b92506107a9600883612c3d565b6107b490600a612d76565b6107be9084612dc0565b92505b50815b92915050565b6060604483511015610838576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f70726f746f636f6c206461746120746f6f2073686f72740000000000000000006044820152606401610757565b6000835167ffffffffffffffff81111561085457610854612748565b6040519080825280601f01601f19166020018201604052801561087e576020820181803683370190505b509050600060188560038151811061089857610898612bb5565b016020015186517fff0000000000000000000000000000000000000000000000000000000000000090911690911c90601090879060029081106108dd576108dd612bb5565b016020015187517fff0000000000000000000000000000000000000000000000000000000000000090911690911c906008908890600190811061092257610922612bb5565b016020015188517fff0000000000000000000000000000000000000000000000000000000000000090911690911c90889060009061096257610962612bb5565b01602001517fff0000000000000000000000000000000000000000000000000000000000000016171717905060007f6111ad25000000000000000000000000000000000000000000000000000000007f9eee52db000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000841601610a10576101008751610a099190612b73565b9150610a15565b602491505b60005b82811015610a9057878181518110610a3257610a32612bb5565b602001015160f81c60f81b858281518110610a4f57610a4f612bb5565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080610a8881612dd7565b915050610a18565b50600086604051602001610aa691815260200190565b604051602081830303815290604052905060005b6020811015610b5857818181518110610ad557610ad5612bb5565b01602001517fff000000000000000000000000000000000000000000000000000000000000001686610b078684612e0f565b81518110610b1757610b17612bb5565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080610b5081612dd7565b915050610aba565b506000610b66846020612e0f565b90505b8851811015610be257888181518110610b8457610b84612bb5565b602001015160f81c60f81b868281518110610ba157610ba1612bb5565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080610bda81612dd7565b915050610b69565b5093979650505050505050565b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1603610cde578051610c7f5780516040517f4c568e59000000000000000000000000000000000000000000000000000000008152600481019190915260006024820152604401610757565b6000610c8e82604001516117b0565b82519091508114610cd85781516040517f4c568e59000000000000000000000000000000000000000000000000000000008152600481019190915260248101829052604401610757565b50610d83565b6000610ced82604001516117b0565b60001c90508073ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1614610d815760a08301516040517f9aa0267000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201529082166024820152604401610757565b505b6040805160a081018252600080825260208201819052918101829052606081018290526080810191909152608083015173ffffffffffffffffffffffffffffffffffffffff1615610ea957610e0183608001517f00000000000000000000000000000000000000000000000000000000000000008560c00151611862565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e4269fc484608001518560c0015184866020015187604001516040518663ffffffff1660e01b8152600401610e72959493929190612e90565b600060405180830381600087803b158015610e8c57600080fd5b505af1158015610ea0573d6000803e3d6000fd5b50505050610f5d565b60c0830151602083015160408085015190517fb0f584ff00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169363b0f584ff939092610f2a92600401612f0f565b6000604051808303818588803b158015610f4357600080fd5b505af1158015610f57573d6000803e3d6000fd5b50505050505b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1603610fe55760e0830151835183516040519081527f7be3e48a8a8b4d32138937e1809ac83481fffe48e49bb60e43ed1d3d50349e4c9060200160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1836040516110149190612f3e565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff83161561104d57611048838383611999565b505050565b6110488282611b1b565b80600003611091576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166110ea57803410156110e6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015611157573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061117b9190613051565b9050818110156111c1576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610757565b61104883333085611c45565b600073ffffffffffffffffffffffffffffffffffffffff82161561127e576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015611255573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112799190613051565b6107c4565b4792915050565b60608160008167ffffffffffffffff8111156112a3576112a3612748565b6040519080825280602002602001820160405280156112cc578160200160208202803683370190505b5090506000805b83811015611386578686828181106112ed576112ed612bb5565b90506020028101906112ff9190612be4565b611310906080810190606001612c22565b915061131b826111cd565b83828151811061132d5761132d612bb5565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661137e573483828151811061136657611366612bb5565b6020026020010181815161137a9190612b73565b9052505b6001016112d3565b509095945050505050565b60005b8181101561104857368383838181106113af576113af612bb5565b90506020028101906113c19190612be4565b90506113d360e0820160c0830161306a565b156113f5576113f56113eb6060830160408401612c22565b8260800135611057565b50600101611394565b8383838382600181146116cb576000858561141a600185612b73565b81811061142957611429612bb5565b905060200281019061143b9190612be4565b61144c906080810190606001612c22565b9050600089815b818110156115f757368d8d8381811061146e5761146e612bb5565b90506020028101906114809190612be4565b90506114af6114956060830160408401612c22565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061151257506115126114c86040830160208401612c22565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561152957506115296114c86020830183612c22565b80156115ae57506115ae61154060a0830183613087565b61154f916004916000916130f3565b6115589161311d565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6115e4576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115ee8f82611e5f565b50600101611453565b505060005b611607600185612b73565b8110156116c357600088888381811061162257611622612bb5565b90506020028101906116349190612be4565b611645906080810190606001612c22565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146116ba5785828151811061168c5761168c612bb5565b602002602001015161169d826111cd565b6116a79190612b73565b925082156116ba576116ba818885611021565b506001016115fc565b5050506117a4565b8760005b818110156117a157368b8b838181106116ea576116ea612bb5565b90506020028101906116fc9190612be4565b90506117116114956060830160408401612c22565b8061172a575061172a6114c86040830160208401612c22565b801561174157506117416114c86020830183612c22565b8015611758575061175861154060a0830183613087565b61178e576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6117988d82611e5f565b506001016116cf565b50505b50505050505050505050565b602081015160009060e081901c806394454a5d8114611814576332ad465f81146118205763afd9b706811461182c57636111ad25811461183857631eb1cff081146118385763b866e173811461184457638e8d142b8114611851576000935061185a565b60a4850151935061185a565b60c4850151935061185a565b6084850151935061185a565b60e4850151935061185a565b610104850151935061185a565b61014485015193505b505050919050565b73ffffffffffffffffffffffffffffffffffffffff831661188257505050565b73ffffffffffffffffffffffffffffffffffffffff82166118cf576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611944573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119689190613051565b10156110485761104883837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61213d565b73ffffffffffffffffffffffffffffffffffffffff83166119e6576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611a33576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611aa0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ac49190613051565b905080821115611b0a576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610757565b611b158484846122ab565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611b68576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611bab576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610757565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611c05576040519150601f19603f3d011682016040523d82523d6000602084013e611c0a565b606091505b5050905080611048576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611c92576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611cdf576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611d50573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d749190613051565b9050611d8282868686612301565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611df2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e169190613051565b611e209190612b73565b14611e57576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b611e75611e6f6020830183612c22565b3b151590565b611eab576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611eeb576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611f006114956060850160408601612c22565b611f0b576000611f11565b82608001355b90506000611f2d611f286060860160408701612c22565b6111cd565b90506000611f44611f286080870160608801612c22565b905082600003611f7b57611f7b611f616060870160408801612c22565b611f716040880160208901612c22565b8760800135611862565b8460800135821015611fc6576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610757565b600080611fd66020880188612c22565b73ffffffffffffffffffffffffffffffffffffffff1685611ffa60a08a018a613087565b604051612008929190613165565b60006040518083038185875af1925050503d8060008114612045576040519150601f19603f3d011682016040523d82523d6000602084013e61204a565b606091505b50915091508161205d5761205d8161235f565b6000612072611f2860808a0160608b01612c22565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896120a360208b018b612c22565b6120b360608c0160408d01612c22565b6120c360808d0160608e01612c22565b8c608001358987116120d557866120df565b6120df8a88612b73565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001790526121c98482612369565b611b155760405173ffffffffffffffffffffffffffffffffffffffff84166024820152600060448201526122a19085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261242a565b611b15848261242a565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526110489084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161221f565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052611b159085907f23b872dd000000000000000000000000000000000000000000000000000000009060840161221f565b8051602082018181fd5b60008060008473ffffffffffffffffffffffffffffffffffffffff16846040516123939190613175565b6000604051808303816000865af19150503d80600081146123d0576040519150601f19603f3d011682016040523d82523d6000602084013e6123d5565b606091505b50915091508180156123ff5750805115806123ff5750808060200190518101906123ff9190613187565b8015612421575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b600061248c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166125399092919063ffffffff16565b90508051600014806124ad5750808060200190518101906124ad9190613187565b611048576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610757565b60606125488484600085612550565b949350505050565b6060824710156125e2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610757565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161260b9190613175565b60006040518083038185875af1925050503d8060008114612648576040519150601f19603f3d011682016040523d82523d6000602084013e61264d565b606091505b509150915061265e87838387612669565b979650505050505050565b606083156126ff5782516000036126f85773ffffffffffffffffffffffffffffffffffffffff85163b6126f8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610757565b5081612548565b61254883838151156127145781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075791906131a4565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561279b5761279b612748565b60405290565b600067ffffffffffffffff808411156127bc576127bc612748565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561280257612802612748565b8160405280935085815286868601111561281b57600080fd5b858560208301376000602087830101525050509392505050565b600082601f83011261284657600080fd5b612855838335602085016127a1565b9392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461288057600080fd5b919050565b801515811461289357600080fd5b50565b803561288081612885565b600061014082840312156128b457600080fd5b6128bc612777565b905081358152602082013567ffffffffffffffff808211156128dd57600080fd5b6128e985838601612835565b6020840152604084013591508082111561290257600080fd5b5061290f84828501612835565b6040830152506129216060830161285c565b60608201526129326080830161285c565b608082015261294360a0830161285c565b60a082015260c082013560c082015260e082013560e082015261010061296a818401612896565b9082015261012061297c838201612896565b9082015292915050565b60006060828403121561299857600080fd5b6040516060810167ffffffffffffffff82821081831117156129bc576129bc612748565b81604052829350843583526129d36020860161285c565b602084015260408501359150808211156129ec57600080fd5b508301601f810185136129fe57600080fd5b612a0d858235602084016127a1565b6040830152505092915050565b60008060008060608587031215612a3057600080fd5b843567ffffffffffffffff80821115612a4857600080fd5b612a54888389016128a1565b95506020870135915080821115612a6a57600080fd5b818701915087601f830112612a7e57600080fd5b813581811115612a8d57600080fd5b8860208260051b8501011115612aa257600080fd5b602083019550809450506040870135915080821115612ac057600080fd5b50612acd87828801612986565b91505092959194509250565b60008060408385031215612aec57600080fd5b823567ffffffffffffffff80821115612b0457600080fd5b612b10868387016128a1565b93506020850135915080821115612b2657600080fd5b50830160608186031215612b3957600080fd5b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156107c4576107c4612b44565b600060208284031215612b9857600080fd5b815160ff8116811461285557600080fd5b60006107c43683612986565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612c1857600080fd5b9190910192915050565b600060208284031215612c3457600080fd5b6128558261285c565b60ff82811682821603908111156107c4576107c4612b44565b600181815b80851115612caf57817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115612c9557612c95612b44565b80851615612ca257918102915b93841c9390800290612c5b565b509250929050565b600082612cc6575060016107c4565b81612cd3575060006107c4565b8160018114612ce95760028114612cf357612d0f565b60019150506107c4565b60ff841115612d0457612d04612b44565b50506001821b6107c4565b5060208310610133831016604e8410600b8410161715612d32575081810a6107c4565b612d3c8383612c56565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115612d6e57612d6e612b44565b029392505050565b600061285560ff841683612cb7565b600082612dbb577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b80820281158282048414176107c4576107c4612b44565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612e0857612e08612b44565b5060010190565b808201808211156107c4576107c4612b44565b60005b83811015612e3d578181015183820152602001612e25565b50506000910152565b60008151808452612e5e816020860160208601612e22565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600061012073ffffffffffffffffffffffffffffffffffffffff8089168452876020850152865160408501526020870151606085015260ff6040880151166080850152606087015160a0850152608087015160c085015280861660e08501525080610100840152612f0381840185612e46565b98975050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831681526040602082015260006125486040830184612e46565b602081528151602082015260006020830151610140806040850152612f67610160850183612e46565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152612fa28382612e46565b9250506060850151612fcc608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061303f8187018315159052565b90950151151593019290925250919050565b60006020828403121561306357600080fd5b5051919050565b60006020828403121561307c57600080fd5b813561285581612885565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126130bc57600080fd5b83018035915067ffffffffffffffff8211156130d757600080fd5b6020019150368190038213156130ec57600080fd5b9250929050565b6000808585111561310357600080fd5b8386111561311057600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561315d5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60008251612c18818460208701612e22565b60006020828403121561319957600080fd5b815161285581612885565b6020815260006128556020830184612e4656fea26469706673582212202e0f4bbb25afeb8fb0b549aef0461309c3c727101c1d8d55fc25ce338ccba22f64736f6c63430008110033";
const isSuperArgs = (xs) => xs.length > 1;
class MayanFacet__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_mayan, overrides) {
        return super.deploy(_mayan, overrides || {});
    }
    getDeployTransaction(_mayan, overrides) {
        return super.getDeployTransaction(_mayan, overrides || {});
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
exports.MayanFacet__factory = MayanFacet__factory;
Object.defineProperty(MayanFacet__factory, "bytecode", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _bytecode
});
Object.defineProperty(MayanFacet__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=MayanFacet__factory.js.map