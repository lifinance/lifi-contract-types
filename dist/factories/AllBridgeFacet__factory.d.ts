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
    static readonly bytecode = "0x60a060405234801561001057600080fd5b50604051611d6c380380611d6c83398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b608051611cd3610099600039600081816105fe0152818161063e015261073d0152611cd36000f3fe6080604052600436106100295760003560e01c8063a74ccb351461002e578063e40f246014610043575b600080fd5b61004161003c366004611798565b610056565b005b610041610051366004611845565b610288565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447611895565b905086806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561015f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101828160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610234576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102498a600001518b60c001518b8b336104ac565b60c08b01526102588a886105f4565b50479150508181111561027a5761027a6000846102758585611895565b610859565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610303576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103143447611895565b9050846103398160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610370576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036103ae576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103eb576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610429576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610467576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047988608001518960c0015161088f565b61048388886105f4565b5047915050818111156104a0576104a06000846102758585611895565b50506000909155505050565b6000828082036104e8576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856104f7600185611895565b818110610506576105066118cf565b905060200281019061051891906118fe565b61052990608081019060600161193c565b9050600061053682610944565b905073ffffffffffffffffffffffffffffffffffffffff82166105605761055d3482611895565b90505b600061056c888861098f565b90506105788888610a9b565b6105858a89898985610b08565b60008261059185610944565b61059b9190611895565b9050898110156105e6576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b61062782608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610eba565b61063760e0820160c0830161195e565b1561073b577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634cd480bd836080015173ffffffffffffffffffffffffffffffffffffffff1660001b8460c0015184602001358560400135866060013587608001358860a00160208101906106c29190611979565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b16815261070497969594939291908b35906004016119d5565b600060405180830381600087803b15801561071e57600080fd5b505af1158015610732573d6000803e3d6000fd5b5050505061081e565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634cd480bd8260000135846080015173ffffffffffffffffffffffffffffffffffffffff1660001b8560c0015185602001358660400135876060013588608001358960a00160208101906107c69190611979565b60006040518a63ffffffff1660e01b81526004016107eb9897969594939291906119d5565b6000604051808303818588803b15801561080457600080fd5b505af1158015610818573d6000803e3d6000fd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161084d9190611a83565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83161561088557610880838383610ee6565b505050565b6108808282610f54565b806000036108c9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610922578034101561091e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61091e73ffffffffffffffffffffffffffffffffffffffff8316333084610fc1565b600073ffffffffffffffffffffffffffffffffffffffff8216156109875761098273ffffffffffffffffffffffffffffffffffffffff83163061101e565b610989565b475b92915050565b60608160008167ffffffffffffffff8111156109ad576109ad61155e565b6040519080825280602002602001820160405280156109d6578160200160208202803683370190505b5090506000805b83811015610a90578686828181106109f7576109f76118cf565b9050602002810190610a0991906118fe565b610a1a90608081019060600161193c565b9150610a2582610944565b838281518110610a3757610a376118cf565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610a885734838281518110610a7057610a706118cf565b60200260200101818151610a849190611895565b9052505b6001016109dd565b509095945050505050565b60005b818110156108805736838383818110610ab957610ab96118cf565b9050602002810190610acb91906118fe565b9050610add60e0820160c0830161195e565b15610aff57610aff610af5606083016040840161193c565b826080013561088f565b50600101610a9e565b838383838260018114610dd55760008585610b24600185611895565b818110610b3357610b336118cf565b9050602002810190610b4591906118fe565b610b5690608081019060600161193c565b9050600089815b81811015610d0157368d8d83818110610b7857610b786118cf565b9050602002810190610b8a91906118fe565b9050610bb9610b9f606083016040840161193c565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610c1c5750610c1c610bd2604083016020840161193c565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610c335750610c33610bd2602083018361193c565b8015610cb85750610cb8610c4a60a0830183611b96565b610c5991600491600091611c02565b610c6291611c2c565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610cee576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610cf88f82611053565b50600101610b5d565b505060005b610d11600185611895565b811015610dcd576000888883818110610d2c57610d2c6118cf565b9050602002810190610d3e91906118fe565b610d4f90608081019060600161193c565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610dc457858281518110610d9657610d966118cf565b6020026020010151610da782610944565b610db19190611895565b92508215610dc457610dc4818885610859565b50600101610d06565b505050610eae565b8760005b81811015610eab57368b8b83818110610df457610df46118cf565b9050602002810190610e0691906118fe565b9050610e1b610b9f606083016040840161193c565b80610e345750610e34610bd2604083016020840161193c565b8015610e4b5750610e4b610bd2602083018361193c565b8015610e625750610e62610c4a60a0830183611b96565b610e98576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ea28d82611053565b50600101610dd9565b50505b50505050505050505050565b6108808383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611330565b73ffffffffffffffffffffffffffffffffffffffff8216610f33576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61088073ffffffffffffffffffffffffffffffffffffffff84168383611443565b73ffffffffffffffffffffffffffffffffffffffff8216610fa1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61091e73ffffffffffffffffffffffffffffffffffffffff831682611492565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d15600160005114171661101057637939f4246000526004601cfd5b600060605260405250505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b611068611063602083018361193c565b6114ae565b61109e576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036110de576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006110f3610b9f606085016040860161193c565b6110fe576000611104565b82608001355b9050600061112061111b606086016040870161193c565b610944565b9050600061113761111b608087016060880161193c565b90508260000361116e5761116e611154606087016040880161193c565b611164604088016020890161193c565b8760800135610eba565b84608001358210156111b9576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016105dd565b6000806111c9602088018861193c565b73ffffffffffffffffffffffffffffffffffffffff16856111ed60a08a018a611b96565b6040516111fb929190611c74565b60006040518083038185875af1925050503d8060008114611238576040519150601f19603f3d011682016040523d82523d6000602084013e61123d565b606091505b50915091508161125057611250816114ca565b600061126561111b60808a0160608b0161193c565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961129660208b018b61193c565b6112a660608c0160408d0161193c565b6112b660808d0160608e0161193c565b8c608001358987116112c857866112d2565b6112d28a88611895565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661137d576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156113f2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114169190611c84565b101561143d5761143d73ffffffffffffffffffffffffffffffffffffffff851684836114d4565b50505050565b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611488576390b8ec186000526004601cfd5b6000603452505050565b60003860003884865af161091e5763b12d13eb6000526004601cfd5b6000813f8181158015906114c25750808214155b949350505050565b8051602082018181fd5b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166114885760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d15600160005114171661148857633e3f8f736000526004601cfd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156115b1576115b161155e565b60405290565b600082601f8301126115c857600080fd5b813567ffffffffffffffff808211156115e3576115e361155e565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156116295761162961155e565b8160405283815286602085880101111561164257600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461168657600080fd5b919050565b8035801515811461168657600080fd5b600061014082840312156116ae57600080fd5b6116b661158d565b905081358152602082013567ffffffffffffffff808211156116d757600080fd5b6116e3858386016115b7565b602084015260408401359150808211156116fc57600080fd5b50611709848285016115b7565b60408301525061171b60608301611662565b606082015261172c60808301611662565b608082015261173d60a08301611662565b60a082015260c082013560c082015260e082013560e082015261010061176481840161168b565b9082015261012061177683820161168b565b9082015292915050565b600060e0828403121561179257600080fd5b50919050565b60008060008061012085870312156117af57600080fd5b843567ffffffffffffffff808211156117c757600080fd5b6117d38883890161169b565b955060208701359150808211156117e957600080fd5b818701915087601f8301126117fd57600080fd5b81358181111561180c57600080fd5b8860208260051b850101111561182157600080fd5b60208301955080945050505061183a8660408701611780565b905092959194509250565b600080610100838503121561185957600080fd5b823567ffffffffffffffff81111561187057600080fd5b61187c8582860161169b565b92505061188c8460208501611780565b90509250929050565b81810381811115610989577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261193257600080fd5b9190910192915050565b60006020828403121561194e57600080fd5b61195782611662565b9392505050565b60006020828403121561197057600080fd5b6119578261168b565b60006020828403121561198b57600080fd5b81356004811061195757600080fd5b600481106119d1577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b6000610100820190508982528860208301528760408301528660608301528560808301528460a0830152611a0c60c083018561199a565b8260e08301529998505050505050505050565b6000815180845260005b81811015611a4557602081850181015186830182015201611a29565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081528151602082015260006020830151610140806040850152611aac610160850183611a1f565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152611ae78382611a1f565b9250506060850151611b11608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120611b848187018315159052565b90950151151593019290925250919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611bcb57600080fd5b83018035915067ffffffffffffffff821115611be657600080fd5b602001915036819003821315611bfb57600080fd5b9250929050565b60008085851115611c1257600080fd5b83861115611c1f57600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015611c6c5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b600060208284031215611c9657600080fd5b505191905056fea26469706673582212203d616d0e44c6415dce8ec4b5c737d2827c5af11eeda790eed495746a6a2d025364736f6c63430008110033";
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
