import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { UnitFacet, UnitFacetInterface } from "../UnitFacet";
type UnitFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class UnitFacet__factory extends ContractFactory {
    constructor(...args: UnitFacetConstructorParams);
    deploy(_backendSigner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<UnitFacet>;
    getDeployTransaction(_backendSigner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): UnitFacet;
    connect(signer: Signer): UnitFacet__factory;
    static readonly bytecode = "0x60a0604052348015600e575f5ffd5b506040516120b33803806120b3833981016040819052602b916061565b6001600160a01b0381166051576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052608c565b5f602082840312156070575f5ffd5b81516001600160a01b03811681146085575f5ffd5b9392505050565b60805161200f6100a45f395f610893015261200f5ff3fe608060405260043610610028575f3560e01c806321a3af521461002c57806364261d5814610041575b5f5ffd5b61003f61003a366004611b5a565b610054565b005b61003f61004f366004611c20565b610328565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df3447611c85565b90508680610100015161011e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561015c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861017f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101f3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610230576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808a01518a905f9073ffffffffffffffffffffffffffffffffffffffff1615610286576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b610539808260e00151146102c7576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102d18e8c6105ef565b6102e58e5f01518f60c001518f8f3361091d565b60c08f01526102f48e8c610a5f565b505050505050505f4790508181111561031b5761031b5f846103168585611c85565b610b5a565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103a3576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103b33447611c85565b9050846103d88160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561040f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361044c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610489576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156104c7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610505576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608088015188905f9073ffffffffffffffffffffffffffffffffffffffff161561055b576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b89610539808260e001511461059c576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105a68c8c6105ef565b6105b88c608001518d60c00151610b8f565b6105c28c8c610a5f565b505050505050505f479050818111156105e4576105e45f846103168585611c85565b50505f909155505050565b806040013542111561062d576040517f0819bdcd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b815160c083015160a08401515f927fe40c93b75fa097357b7b866c9d28e3dba6e987fba2808befeaafebac93b94cba92909161066c6020870187611cbd565b60e0808901516080808b015160408051602081019a909a5289810198909852606089019690965273ffffffffffffffffffffffffffffffffffffffff9485169088015291831660a087015260c0860191909152911690830152830135610100820152610120016040516020818303038152906040528051906020012090505f6107ee604080518082018252601081527f4c492e464920556e69742046616365740000000000000000000000000000000060209182015281518083018352600181527f31000000000000000000000000000000000000000000000000000000000000009082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527ff0a02c1921521518850ca78482536905d1a21c781491272fbe7c7d3021953493818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c0909101909252815191012090565b6040517f190100000000000000000000000000000000000000000000000000000000000060208201526022810191909152604281018390526062016040516020818303038152906040528051906020012090505f61088f828580602001906108569190611cdd565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250610c4392505050565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610916576040517f8baa579f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505050565b5f82808203610958576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610966600185611c85565b81811061097557610975611d45565b90506020028101906109879190611d72565b610998906080810190606001611cbd565b90505f6109a482610ce7565b905073ffffffffffffffffffffffffffffffffffffffff82166109ce576109cb3482611c85565b90505b5f6109d98888610d31565b90506109e58888610e3b565b6109f28a89898985610ea7565b5f826109fd85610ce7565b610a079190611c85565b905089811015610a51576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b81515f9081527ff784c57ea699075f7cf9159bcfe61b2ecdc5f01960f4d7812ed1d1a4079270ee602081905260409091205460ff1615610acb576040517feb4156ad00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b82515f9081526020828152604090912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055610b1e90610b1490840184611cbd565b8460c001516110f2565b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610b4d9190611dfa565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff8316610b8457610b7f82826110f2565b505050565b610b7f83838361115f565b805f03610bc8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610c215780341015610c1d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610c1d73ffffffffffffffffffffffffffffffffffffffff83163330846111cd565b604051600190835f5260208301516040526040835103610c9757604083015160ff81901c601b016020527f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16606052610cbb565b6041835103610cb75760608301515f1a6020526040830151606052610cbb565b5f91505b6020600160805f855afa5191503d610cda57638baa579f5f526004601cfd5b5f60605260405292915050565b5f73ffffffffffffffffffffffffffffffffffffffff821615610d2957610d2473ffffffffffffffffffffffffffffffffffffffff831630611225565b610d2b565b475b92915050565b6060815f8167ffffffffffffffff811115610d4e57610d4e611925565b604051908082528060200260200182016040528015610d77578160200160208202803683370190505b5090505f5f5b83811015610e3057868682818110610d9757610d97611d45565b9050602002810190610da99190611d72565b610dba906080810190606001611cbd565b9150610dc582610ce7565b838281518110610dd757610dd7611d45565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610e285734838281518110610e1057610e10611d45565b60200260200101818151610e249190611c85565b9052505b600101610d7d565b509095945050505050565b5f5b81811015610b7f5736838383818110610e5857610e58611d45565b9050602002810190610e6a9190611d72565b9050610e7c60e0820160c08301611f0d565b15610e9e57610e9e610e946060830160408401611cbd565b8260800135610b8f565b50600101610e3d565b83838383825f5b818110156110d857368a8a83818110610ec957610ec9611d45565b9050602002810190610edb9190611d72565b90505f610eeb6020830183611cbd565b90505f610efe6040840160208501611cbd565b9050610fa182610f1160a0860186611cdd565b610f1f916004915f91611f26565b610f2891611f4d565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b15806110895750610fd5610fbb6060850160408601611cbd565b73ffffffffffffffffffffffffffffffffffffffff161590565b15801561100e57508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b8015611089575073ffffffffffffffffffffffffffffffffffffffff81165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b156110c0576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110ca8e84611258565b836001019350505050610eae565b50506110e7848484845f6114cb565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff821661113f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c1d73ffffffffffffffffffffffffffffffffffffffff8316826116e2565b73ffffffffffffffffffffffffffffffffffffffff82166111ac576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b7f73ffffffffffffffffffffffffffffffffffffffff841683836116fb565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661121857637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6112706112686020830183611cbd565b6017903b1190565b6112a6576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036112e5576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6112f9610fbb6060850160408601611cbd565b611303575f611309565b82608001355b90505f61132461131f6080860160608701611cbd565b610ce7565b9050815f0361135a5761135a6113406060860160408701611cbd565b6113506040870160208801611cbd565b8660800135611744565b5f806113696020870187611cbd565b73ffffffffffffffffffffffffffffffffffffffff168461138d60a0890189611cdd565b60405161139b929190611fb3565b5f6040518083038185875af1925050503d805f81146113d5576040519150601f19603f3d011682016040523d82523d5f602084013e6113da565b606091505b5091509150816113ed576113ed81611770565b5f61140161131f6080890160608a01611cbd565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861143260208a018a611cbd565b61144260608b0160408c01611cbd565b61145260808c0160608d01611cbd565b8b60800135898711611464578661146e565b61146e8a88611c85565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826114da600182611c85565b8181106114e9576114e9611d45565b90506020028101906114fb9190611d72565b61150c906080810190606001611cbd565b90505f5f5f5f5f5f5f5b888110156116d25761152960018a611c85565b81108015611538575088600114155b15611613578d8d8281811061154f5761154f611d45565b90506020028101906115619190611d72565b611572906080810190606001611cbd565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611613578a81815181106115b9576115b9611d45565b60200260200101516115ca87610ce7565b6115d49190611c85565b965073ffffffffffffffffffffffffffffffffffffffff8616156115f8575f6115fa565b895b93508387111561161357611613868d610316878b611c85565b8d8d8281811061162557611625611d45565b90506020028101906116379190611d72565b611648906060810190604001611cbd565b945061165385610ce7565b925073ffffffffffffffffffffffffffffffffffffffff851615611677575f611679565b895b915081831180156116b657508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156116ca576116ca858d6103168587611c85565b600101611516565b5050505050505050505050505050565b5f385f3884865af1610c1d5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661173b576390b8ec185f526004601cfd5b5f603452505050565b610b7f8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61177a565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff8416156118a15773ffffffffffffffffffffffffffffffffffffffff83166117e3576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611856573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061187a9190611fc2565b10156118a1576118a173ffffffffffffffffffffffffffffffffffffffff851684836118a7565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661173b575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661173b57633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561197657611976611925565b60405290565b5f82601f83011261198b575f5ffd5b813567ffffffffffffffff8111156119a5576119a5611925565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff811182821017156119f2576119f2611925565b604052818152838201602001851015611a09575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611a48575f5ffd5b919050565b80358015158114611a48575f5ffd5b5f6101408284031215611a6d575f5ffd5b611a75611952565b823581529050602082013567ffffffffffffffff811115611a94575f5ffd5b611aa08482850161197c565b602083015250604082013567ffffffffffffffff811115611abf575f5ffd5b611acb8482850161197c565b604083015250611add60608301611a25565b6060820152611aee60808301611a25565b6080820152611aff60a08301611a25565b60a082015260c0828101359082015260e08083013590820152611b256101008301611a4d565b610100820152611b386101208301611a4d565b61012082015292915050565b5f60608284031215611b54575f5ffd5b50919050565b5f5f5f5f60608587031215611b6d575f5ffd5b843567ffffffffffffffff811115611b83575f5ffd5b611b8f87828801611a5c565b945050602085013567ffffffffffffffff811115611bab575f5ffd5b8501601f81018713611bbb575f5ffd5b803567ffffffffffffffff811115611bd1575f5ffd5b8760208260051b8401011115611be5575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611c08575f5ffd5b611c1487828801611b44565b91505092959194509250565b5f5f60408385031215611c31575f5ffd5b823567ffffffffffffffff811115611c47575f5ffd5b611c5385828601611a5c565b925050602083013567ffffffffffffffff811115611c6f575f5ffd5b611c7b85828601611b44565b9150509250929050565b81810381811115610d2b577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f60208284031215611ccd575f5ffd5b611cd682611a25565b9392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611d10575f5ffd5b83018035915067ffffffffffffffff821115611d2a575f5ffd5b602001915036819003821315611d3e575f5ffd5b9250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611da4575f5ffd5b9190910192915050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611e21610160840182611dae565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611e5c8282611dae565b9150506060840151611e86608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611ef561012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215611f1d575f5ffd5b611cd682611a4d565b5f5f85851115611f34575f5ffd5b83861115611f40575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611fac577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215611fd2575f5ffd5b505191905056fea2646970667358221220e539f79691e5333e2b205f498a909c0758920de7a03b64f10af698a7fbc35f1e64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_backendSigner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaUnit";
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
            readonly name: "_unitData";
            readonly type: "tuple";
            readonly internalType: "struct UnitFacet.UnitData";
            readonly components: readonly [{
                readonly name: "depositAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaUnit";
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
            readonly name: "_unitData";
            readonly type: "tuple";
            readonly internalType: "struct UnitFacet.UnitData";
            readonly components: readonly [{
                readonly name: "depositAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "AssetSwapped";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }, {
            readonly name: "dex";
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
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChain";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChainBytes32";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
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
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidDestinationChain";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidSendingToken";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidSignature";
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
    }, {
        readonly type: "error";
        readonly name: "SignatureExpired";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "TransactionAlreadyProcessed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnsupportedChain";
        readonly inputs: readonly [];
    }];
    static createInterface(): UnitFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UnitFacet;
}
export {};
