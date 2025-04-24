import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AllBridgeFacet, AllBridgeFacetInterface } from "../AllBridgeFacet";
declare type AllBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AllBridgeFacet__factory extends ContractFactory {
    constructor(...args: AllBridgeFacetConstructorParams);
    deploy(_allBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AllBridgeFacet>;
    getDeployTransaction(_allBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AllBridgeFacet;
    connect(signer: Signer): AllBridgeFacet__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b50604051611d71380380611d7183398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b608051611cd8610099600039600081816105fe0152818161063e015261073d0152611cd86000f3fe6080604052600436106100295760003560e01c8063a74ccb351461002e578063e40f246014610043575b600080fd5b61004161003c36600461179d565b610056565b005b61004161005136600461184a565b610288565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e2344761189a565b905086806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561015f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101828160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610234576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102498a600001518b60c001518b8b336104ac565b60c08b01526102588a886105f4565b50479150508181111561027a5761027a600084610275858561189a565b610859565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610303576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155336000610314344761189a565b9050846103398160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610370576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036103ae576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103eb576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610429576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610467576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047988608001518960c0015161088e565b61048388886105f4565b5047915050818111156104a0576104a0600084610275858561189a565b50506000909155505050565b6000828082036104e8576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856104f760018561189a565b818110610506576105066118d4565b90506020028101906105189190611903565b610529906080810190606001611941565b9050600061053682610943565b905073ffffffffffffffffffffffffffffffffffffffff82166105605761055d348261189a565b90505b600061056c888861098e565b90506105788888610a9a565b6105858a89898985610b07565b60008261059185610943565b61059b919061189a565b9050898110156105e6576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b61062782608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610eb9565b61063760e0820160c08301611963565b1561073b577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634cd480bd836080015173ffffffffffffffffffffffffffffffffffffffff1660001b8460c0015184602001358560400135866060013587608001358860a00160208101906106c2919061197e565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b16815261070497969594939291908b35906004016119da565b600060405180830381600087803b15801561071e57600080fd5b505af1158015610732573d6000803e3d6000fd5b5050505061081e565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634cd480bd8260000135846080015173ffffffffffffffffffffffffffffffffffffffff1660001b8560c0015185602001358660400135876060013588608001358960a00160208101906107c6919061197e565b60006040518a63ffffffff1660e01b81526004016107eb9897969594939291906119da565b6000604051808303818588803b15801561080457600080fd5b505af1158015610818573d6000803e3d6000fd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161084d9190611a88565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83166108835761087e8282610ee5565b505050565b61087e838383610f52565b806000036108c8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610921578034101561091d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61091d73ffffffffffffffffffffffffffffffffffffffff8316333084610fc0565b600073ffffffffffffffffffffffffffffffffffffffff8216156109865761098173ffffffffffffffffffffffffffffffffffffffff83163061101d565b610988565b475b92915050565b60608160008167ffffffffffffffff8111156109ac576109ac611563565b6040519080825280602002602001820160405280156109d5578160200160208202803683370190505b5090506000805b83811015610a8f578686828181106109f6576109f66118d4565b9050602002810190610a089190611903565b610a19906080810190606001611941565b9150610a2482610943565b838281518110610a3657610a366118d4565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610a875734838281518110610a6f57610a6f6118d4565b60200260200101818151610a83919061189a565b9052505b6001016109dc565b509095945050505050565b60005b8181101561087e5736838383818110610ab857610ab86118d4565b9050602002810190610aca9190611903565b9050610adc60e0820160c08301611963565b15610afe57610afe610af46060830160408401611941565b826080013561088e565b50600101610a9d565b838383838260018114610dd45760008585610b2360018561189a565b818110610b3257610b326118d4565b9050602002810190610b449190611903565b610b55906080810190606001611941565b9050600089815b81811015610d0057368d8d83818110610b7757610b776118d4565b9050602002810190610b899190611903565b9050610bb8610b9e6060830160408401611941565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610c1b5750610c1b610bd16040830160208401611941565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610c325750610c32610bd16020830183611941565b8015610cb75750610cb7610c4960a0830183611b9b565b610c5891600491600091611c07565b610c6191611c31565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610ced576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610cf78f82611052565b50600101610b5c565b505060005b610d1060018561189a565b811015610dcc576000888883818110610d2b57610d2b6118d4565b9050602002810190610d3d9190611903565b610d4e906080810190606001611941565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610dc357858281518110610d9557610d956118d4565b6020026020010151610da682610943565b610db0919061189a565b92508215610dc357610dc3818885610859565b50600101610d05565b505050610ead565b8760005b81811015610eaa57368b8b83818110610df357610df36118d4565b9050602002810190610e059190611903565b9050610e1a610b9e6060830160408401611941565b80610e335750610e33610bd16040830160208401611941565b8015610e4a5750610e4a610bd16020830183611941565b8015610e615750610e61610c4960a0830183611b9b565b610e97576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ea18d82611052565b50600101610dd8565b50505b50505050505050505050565b61087e8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611351565b73ffffffffffffffffffffffffffffffffffffffff8216610f32576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61091d73ffffffffffffffffffffffffffffffffffffffff831682611464565b73ffffffffffffffffffffffffffffffffffffffff8216610f9f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61087e73ffffffffffffffffffffffffffffffffffffffff84168383611480565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d15600160005114171661100f57637939f4246000526004601cfd5b600060605260405250505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b6110896110626020830183611941565b3f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470141590565b6110bf576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036110ff576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611114610b9e6060850160408601611941565b61111f576000611125565b82608001355b9050600061114161113c6060860160408701611941565b610943565b9050600061115861113c6080870160608801611941565b90508260000361118f5761118f6111756060870160408801611941565b6111856040880160208901611941565b8760800135610eb9565b84608001358210156111da576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016105dd565b6000806111ea6020880188611941565b73ffffffffffffffffffffffffffffffffffffffff168561120e60a08a018a611b9b565b60405161121c929190611c79565b60006040518083038185875af1925050503d8060008114611259576040519150601f19603f3d011682016040523d82523d6000602084013e61125e565b606091505b50915091508161127157611271816114cf565b600061128661113c60808a0160608b01611941565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896112b760208b018b611941565b6112c760608c0160408d01611941565b6112d760808d0160608e01611941565b8c608001358987116112e957866112f3565b6112f38a8861189a565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661139e576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611413573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114379190611c89565b101561145e5761145e73ffffffffffffffffffffffffffffffffffffffff851684836114d9565b50505050565b60003860003884865af161091d5763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166114c5576390b8ec186000526004601cfd5b6000603452505050565b8051602082018181fd5b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166114c55760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d1560016000511417166114c557633e3f8f736000526004601cfd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156115b6576115b6611563565b60405290565b600082601f8301126115cd57600080fd5b813567ffffffffffffffff808211156115e8576115e8611563565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561162e5761162e611563565b8160405283815286602085880101111561164757600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461168b57600080fd5b919050565b8035801515811461168b57600080fd5b600061014082840312156116b357600080fd5b6116bb611592565b905081358152602082013567ffffffffffffffff808211156116dc57600080fd5b6116e8858386016115bc565b6020840152604084013591508082111561170157600080fd5b5061170e848285016115bc565b60408301525061172060608301611667565b606082015261173160808301611667565b608082015261174260a08301611667565b60a082015260c082013560c082015260e082013560e0820152610100611769818401611690565b9082015261012061177b838201611690565b9082015292915050565b600060e0828403121561179757600080fd5b50919050565b60008060008061012085870312156117b457600080fd5b843567ffffffffffffffff808211156117cc57600080fd5b6117d8888389016116a0565b955060208701359150808211156117ee57600080fd5b818701915087601f83011261180257600080fd5b81358181111561181157600080fd5b8860208260051b850101111561182657600080fd5b60208301955080945050505061183f8660408701611785565b905092959194509250565b600080610100838503121561185e57600080fd5b823567ffffffffffffffff81111561187557600080fd5b611881858286016116a0565b9250506118918460208501611785565b90509250929050565b81810381811115610988577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261193757600080fd5b9190910192915050565b60006020828403121561195357600080fd5b61195c82611667565b9392505050565b60006020828403121561197557600080fd5b61195c82611690565b60006020828403121561199057600080fd5b81356004811061195c57600080fd5b600481106119d6577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b6000610100820190508982528860208301528760408301528660608301528560808301528460a0830152611a1160c083018561199f565b8260e08301529998505050505050505050565b6000815180845260005b81811015611a4a57602081850181015186830182015201611a2e565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081528151602082015260006020830151610140806040850152611ab1610160850183611a24565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152611aec8382611a24565b9250506060850151611b16608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120611b898187018315159052565b90950151151593019290925250919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611bd057600080fd5b83018035915067ffffffffffffffff821115611beb57600080fd5b602001915036819003821315611c0057600080fd5b9250929050565b60008085851115611c1757600080fd5b83861115611c2457600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015611c715780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b600060208284031215611c9b57600080fd5b505191905056fea26469706673582212203c114922ea85aa2c1c6c30d588cab0bd66df6cca077ab1dcd268d857993ca67464736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_allBridge";
            readonly type: "address";
            readonly internalType: "contract IAllBridge";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAllBridge";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_allBridgeData";
            readonly type: "tuple";
            readonly internalType: "struct AllBridgeFacet.AllBridgeData";
            readonly components: readonly [{
                readonly name: "fees";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "recipient";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiveToken";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "messenger";
                readonly type: "uint8";
                readonly internalType: "enum IAllBridge.MessengerProtocol";
            }, {
                readonly name: "payFeeWithSendingAsset";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaAllBridge";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_allBridgeData";
            readonly type: "tuple";
            readonly internalType: "struct AllBridgeFacet.AllBridgeData";
            readonly components: readonly [{
                readonly name: "fees";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "recipient";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiveToken";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "messenger";
                readonly type: "uint8";
                readonly internalType: "enum IAllBridge.MessengerProtocol";
            }, {
                readonly name: "payFeeWithSendingAsset";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CannotBridgeToSameNetwork";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CumulativeSlippageTooHigh";
        readonly inputs: readonly [{
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receivedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InformationMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): AllBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AllBridgeFacet;
}
export {};
