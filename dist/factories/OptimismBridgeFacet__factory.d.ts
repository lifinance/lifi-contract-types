import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { OptimismBridgeFacet, OptimismBridgeFacetInterface } from "../OptimismBridgeFacet";
type OptimismBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class OptimismBridgeFacet__factory extends ContractFactory {
    constructor(...args: OptimismBridgeFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<OptimismBridgeFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): OptimismBridgeFacet;
    connect(signer: Signer): OptimismBridgeFacet__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506123628061001c5f395ff3fe60806040526004361061003e575f3560e01c80635bb5d44814610042578063899cc31714610057578063ce8a97a514610076578063decb09d714610089575b5f5ffd5b610055610050366004611d7f565b6100a8565b005b348015610062575f5ffd5b50610055610071366004611e2c565b6102d5565b610055610084366004611eae565b610540565b348015610094575f5ffd5b506100556100a3366004611efa565b610760565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610123576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101333447611f31565b905086806101000151610172576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101b0576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101d38160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561020a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610247576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610284576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102988a5f01518b60c001518b8b336108d4565b60c08b01526102a78a88610a16565b5047915050818111156102c8576102c85f846102c38585611f31565b610d8e565b50505f9091555050505050565b6102dd610dc3565b7f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca4547f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca39074010000000000000000000000000000000000000000900460ff1615610373576040517f0dc149f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f5b838110156104a6575f85858381811061039057610390611f69565b90506040020160200160208101906103a89190611f96565b73ffffffffffffffffffffffffffffffffffffffff16036103f5576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84848281811061040757610407611f69565b905060400201602001602081019061041f9190611f96565b825f87878581811061043357610433611f69565b6104499260206040909202019081019150611f96565b73ffffffffffffffffffffffffffffffffffffffff908116825260208201929092526040015f2080547fffffffffffffffffffffffff00000000000000000000000000000000000000001692909116919091179055600101610375565b506001810180547fffffffffffffffffffffff0000000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841617740100000000000000000000000000000000000000001790556040517fd192688003c02a257d1ee3ef083c31f3ba31e400ad8655bf4257081255c91568906105329086908690611fb8565b60405180910390a150505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016105bb576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6105cb3447611f31565b9050848061010001511561060b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610120015115610649576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8661066c8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156106a3576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036106e0576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361071d576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61072f88608001518960c00151610e38565b6107398888610a16565b504791505081811115610755576107555f846102c38585611f31565b50505f909155505050565b610768610dc3565b7f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca4547f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca39074010000000000000000000000000000000000000000900460ff166107fd576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661084a576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8381165f818152602084815260409182902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169487169485179055905192835290917f8ba151f3405c32cff2d4c159409e00b97b0b46fbcbe59438e7f62c1283f80638910160405180910390a2505050565b5f8280820361090f576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561091d600185611f31565b81811061092c5761092c611f69565b905060200281019061093e919061203a565b61094f906080810190606001611f96565b90505f61095b82610eec565b905073ffffffffffffffffffffffffffffffffffffffff8216610985576109823482611f31565b90505b5f6109908888610f36565b905061099c8888611040565b6109a98a898989856110ac565b5f826109b485610eec565b6109be9190611f31565b905089811015610a08576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff9081165f9081527f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca360208190526040822054909216908115610a725781610a8e565b600183015473ffffffffffffffffffffffffffffffffffffffff165b9050610ab2856080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610b865760c085015160a086015173ffffffffffffffffffffffffffffffffffffffff831691639a2ac6d591610aef6040890160208a01612076565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b16815273ffffffffffffffffffffffffffffffffffffffff909216600483015263ffffffff166024820152606060448201525f60648201526084015f604051808303818588803b158015610b6a575f5ffd5b505af1158015610b7c573d5f5f3e3d5ffd5b5050505050610d50565b610b998560800151828760c0015161130b565b610ba96060850160408601612099565b15610c5b5760a085015160c08601516040517fffaad6a500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169263ffaad6a592610c299260040173ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b5f604051808303815f87803b158015610c40575f5ffd5b505af1158015610c52573d5f5f3e3d5ffd5b50505050610d50565b608085015173ffffffffffffffffffffffffffffffffffffffff82169063838b252090610c8b6020880188611f96565b60a089015160c08a0151610ca560408b0160208c01612076565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e088901b16815273ffffffffffffffffffffffffffffffffffffffff95861660048201529385166024850152939091166044830152606482015263ffffffff91909116608482015260c060a48201525f60c482015260e4015f604051808303815f87803b158015610d39575f5ffd5b505af1158015610d4b573d5f5f3e3d5ffd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f185604051610d7f91906120fe565b60405180910390a15050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610db857610db38282611337565b505050565b610db38383836113a4565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610e36576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b805f03610e71576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610eca5780341015610ec6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610ec673ffffffffffffffffffffffffffffffffffffffff8316333084611412565b5f73ffffffffffffffffffffffffffffffffffffffff821615610f2e57610f2973ffffffffffffffffffffffffffffffffffffffff83163061146a565b610f30565b475b92915050565b6060815f8167ffffffffffffffff811115610f5357610f53611b3e565b604051908082528060200260200182016040528015610f7c578160200160208202803683370190505b5090505f5f5b8381101561103557868682818110610f9c57610f9c611f69565b9050602002810190610fae919061203a565b610fbf906080810190606001611f96565b9150610fca82610eec565b838281518110610fdc57610fdc611f69565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661102d573483828151811061101557611015611f69565b602002602001018181516110299190611f31565b9052505b600101610f82565b509095945050505050565b5f5b81811015610db3573683838381811061105d5761105d611f69565b905060200281019061106f919061203a565b905061108160e0820160c08301612099565b156110a3576110a36110996060830160408401611f96565b8260800135610e38565b50600101611042565b83838383825f5b818110156112f157368a8a838181106110ce576110ce611f69565b90506020028101906110e0919061203a565b905061118f6110f26020830183611f96565b6110ff60a0840184612211565b61110d916004915f91612279565b611116916122a0565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b15806112a757506111c36111a96060830160408401611f96565b73ffffffffffffffffffffffffffffffffffffffff161590565b15801561121757506111d86020820182611f96565b73ffffffffffffffffffffffffffffffffffffffff166111fe6040830160208401611f96565b73ffffffffffffffffffffffffffffffffffffffff1614155b80156112a757506112a56112316040830160208401611f96565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff1690565b155b156112de576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112e88c8261149d565b506001016110b3565b5050611300848484845f611710565b505050505050505050565b610db38383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611927565b73ffffffffffffffffffffffffffffffffffffffff8216611384576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ec673ffffffffffffffffffffffffffffffffffffffff831682611a54565b73ffffffffffffffffffffffffffffffffffffffff82166113f1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610db373ffffffffffffffffffffffffffffffffffffffff84168383611a6d565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661145d57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6114b56114ad6020830183611f96565b6017903b1190565b6114eb576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361152a576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61153e6111a96060850160408601611f96565b611548575f61154e565b82608001355b90505f6115696115646080860160608701611f96565b610eec565b9050815f0361159f5761159f6115856060860160408701611f96565b6115956040870160208801611f96565b866080013561130b565b5f806115ae6020870187611f96565b73ffffffffffffffffffffffffffffffffffffffff16846115d260a0890189612211565b6040516115e0929190612306565b5f6040518083038185875af1925050503d805f811461161a576040519150601f19603f3d011682016040523d82523d5f602084013e61161f565b606091505b5091509150816116325761163281611ab6565b5f6116466115646080890160608a01611f96565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861167760208a018a611f96565b61168760608b0160408c01611f96565b61169760808c0160608d01611f96565b8b608001358987116116a957866116b3565b6116b38a88611f31565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f868261171f600182611f31565b81811061172e5761172e611f69565b9050602002810190611740919061203a565b611751906080810190606001611f96565b90505f5f5f5f5f5f5f5b888110156119175761176e60018a611f31565b8110801561177d575088600114155b15611858578d8d8281811061179457611794611f69565b90506020028101906117a6919061203a565b6117b7906080810190606001611f96565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611858578a81815181106117fe576117fe611f69565b602002602001015161180f87610eec565b6118199190611f31565b965073ffffffffffffffffffffffffffffffffffffffff86161561183d575f61183f565b895b93508387111561185857611858868d6102c3878b611f31565b8d8d8281811061186a5761186a611f69565b905060200281019061187c919061203a565b61188d906060810190604001611f96565b945061189885610eec565b925073ffffffffffffffffffffffffffffffffffffffff8516156118bc575f6118be565b895b915081831180156118fb57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561190f5761190f858d6102c38587611f31565b60010161175b565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841615611a4e5773ffffffffffffffffffffffffffffffffffffffff8316611990576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611a03573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611a279190612315565b1015611a4e57611a4e73ffffffffffffffffffffffffffffffffffffffff85168483611ac0565b50505050565b5f385f3884865af1610ec65763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611aad576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611aad575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611aad57633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611b8f57611b8f611b3e565b60405290565b5f82601f830112611ba4575f5ffd5b813567ffffffffffffffff811115611bbe57611bbe611b3e565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611c0b57611c0b611b3e565b604052818152838201602001851015611c22575f5ffd5b816020850160208301375f918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611c5f575f5ffd5b50565b8035611c6d81611c3e565b919050565b80358015158114611c6d575f5ffd5b5f6101408284031215611c92575f5ffd5b611c9a611b6b565b823581529050602082013567ffffffffffffffff811115611cb9575f5ffd5b611cc584828501611b95565b602083015250604082013567ffffffffffffffff811115611ce4575f5ffd5b611cf084828501611b95565b604083015250611d0260608301611c62565b6060820152611d1360808301611c62565b6080820152611d2460a08301611c62565b60a082015260c0828101359082015260e08083013590820152611d4a6101008301611c72565b610100820152611d5d6101208301611c72565b61012082015292915050565b5f60608284031215611d79575f5ffd5b50919050565b5f5f5f5f60a08587031215611d92575f5ffd5b843567ffffffffffffffff811115611da8575f5ffd5b611db487828801611c81565b945050602085013567ffffffffffffffff811115611dd0575f5ffd5b8501601f81018713611de0575f5ffd5b803567ffffffffffffffff811115611df6575f5ffd5b8760208260051b8401011115611e0a575f5ffd5b60209190910193509150611e218660408701611d69565b905092959194509250565b5f5f5f60408486031215611e3e575f5ffd5b833567ffffffffffffffff811115611e54575f5ffd5b8401601f81018613611e64575f5ffd5b803567ffffffffffffffff811115611e7a575f5ffd5b8660208260061b8401011115611e8e575f5ffd5b602091820194509250840135611ea381611c3e565b809150509250925092565b5f5f60808385031215611ebf575f5ffd5b823567ffffffffffffffff811115611ed5575f5ffd5b611ee185828601611c81565b925050611ef18460208501611d69565b90509250929050565b5f5f60408385031215611f0b575f5ffd5b8235611f1681611c3e565b91506020830135611f2681611c3e565b809150509250929050565b81810381811115610f30577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f60208284031215611fa6575f5ffd5b8135611fb181611c3e565b9392505050565b602080825281018290525f8360408301825b85811015612030578235611fdd81611c3e565b73ffffffffffffffffffffffffffffffffffffffff168252602083013561200381611c3e565b73ffffffffffffffffffffffffffffffffffffffff16602083015260409283019290910190600101611fca565b5095945050505050565b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261206c575f5ffd5b9190910192915050565b5f60208284031215612086575f5ffd5b813563ffffffff81168114611fb1575f5ffd5b5f602082840312156120a9575f5ffd5b611fb182611c72565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526121256101608401826120b2565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261216082826120b2565b915050606084015161218a608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516121f961012085018215159052565b50610120840151801515610140850152509392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612244575f5ffd5b83018035915067ffffffffffffffff82111561225e575f5ffd5b602001915036819003821315612272575f5ffd5b9250929050565b5f5f85851115612287575f5ffd5b83861115612293575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156122ff577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215612325575f5ffd5b505191905056fea2646970667358221220031892568cc11faba0adf0e6e60c3014b5993e2e65afdf0b324a1c6388ed2b7e64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "initOptimism";
        readonly inputs: readonly [{
            readonly name: "configs";
            readonly type: "tuple[]";
            readonly internalType: "struct OptimismBridgeFacet.Config[]";
            readonly components: readonly [{
                readonly name: "assetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "bridge";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }, {
            readonly name: "standardBridge";
            readonly type: "address";
            readonly internalType: "contract IL1StandardBridge";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "registerOptimismBridge";
        readonly inputs: readonly [{
            readonly name: "assetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "bridge";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaOptimismBridge";
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
            readonly name: "_optimismData";
            readonly type: "tuple";
            readonly internalType: "struct OptimismBridgeFacet.OptimismData";
            readonly components: readonly [{
                readonly name: "assetIdOnL2";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "l2Gas";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "isSynthetix";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaOptimismBridge";
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
            readonly name: "_optimismData";
            readonly type: "tuple";
            readonly internalType: "struct OptimismBridgeFacet.OptimismData";
            readonly components: readonly [{
                readonly name: "assetIdOnL2";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "l2Gas";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "isSynthetix";
                readonly type: "bool";
                readonly internalType: "bool";
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
        readonly type: "event";
        readonly name: "OptimismBridgeRegistered";
        readonly inputs: readonly [{
            readonly name: "assetId";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "bridge";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OptimismInitialized";
        readonly inputs: readonly [{
            readonly name: "configs";
            readonly type: "tuple[]";
            readonly indexed: false;
            readonly internalType: "struct OptimismBridgeFacet.Config[]";
            readonly components: readonly [{
                readonly name: "assetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "bridge";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "AlreadyInitialized";
        readonly inputs: readonly [];
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
        readonly name: "NotInitialized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "OnlyContractOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): OptimismBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OptimismBridgeFacet;
}
export {};
