import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { OptimismBridgeFacet, OptimismBridgeFacetInterface } from "../OptimismBridgeFacet";
declare type OptimismBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506124e78061001c5f395ff3fe60806040526004361061003e575f3560e01c80635bb5d44814610042578063899cc31714610057578063ce8a97a514610076578063decb09d714610089575b5f5ffd5b610055610050366004611e9d565b6100a8565b005b348015610062575f5ffd5b50610055610071366004611f4a565b6102d5565b610055610084366004611fcc565b610540565b348015610094575f5ffd5b506100556100a3366004612018565b610760565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610123576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f610133344761204f565b905086806101000151610172576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101b0576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101d38160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561020a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610247576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610284576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102988a5f01518b60c001518b8b336108d4565b60c08b01526102a78a88610a17565b5047915050818111156102c8576102c85f846102c3858561204f565b610d8f565b50505f9091555050505050565b6102dd610dc4565b7f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca4547f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca39074010000000000000000000000000000000000000000900460ff1615610373576040517f0dc149f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f5b838110156104a6575f85858381811061039057610390612087565b90506040020160200160208101906103a891906120b4565b73ffffffffffffffffffffffffffffffffffffffff16036103f5576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84848281811061040757610407612087565b905060400201602001602081019061041f91906120b4565b825f87878581811061043357610433612087565b61044992602060409092020190810191506120b4565b73ffffffffffffffffffffffffffffffffffffffff908116825260208201929092526040015f2080547fffffffffffffffffffffffff00000000000000000000000000000000000000001692909116919091179055600101610375565b506001810180547fffffffffffffffffffffff0000000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841617740100000000000000000000000000000000000000001790556040517fd192688003c02a257d1ee3ef083c31f3ba31e400ad8655bf4257081255c915689061053290869086906120d6565b60405180910390a150505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016105bb576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6105cb344761204f565b9050848061010001511561060b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610120015115610649576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8661066c8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156106a3576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036106e0576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361071d576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61072f88608001518960c00151610e39565b6107398888610a17565b504791505081811115610755576107555f846102c3858561204f565b50505f909155505050565b610768610dc4565b7f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca4547f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca39074010000000000000000000000000000000000000000900460ff166107fd576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661084a576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8381165f818152602084815260409182902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169487169485179055905192835290917f8ba151f3405c32cff2d4c159409e00b97b0b46fbcbe59438e7f62c1283f80638910160405180910390a2505050565b5f8280820361090f576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561091d60018561204f565b81811061092c5761092c612087565b905060200281019061093e9190612158565b61094f9060808101906060016120b4565b90505f61095b82610eed565b905073ffffffffffffffffffffffffffffffffffffffff821661098557610982348261204f565b90505b5f6109908888610f37565b905061099c8888611041565b6109a98a898989856110ad565b5f826109b485610eed565b6109be919061204f565b905089811015610a09576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff9081165f9081527f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca360208190526040822054909216908115610a735781610a8f565b600183015473ffffffffffffffffffffffffffffffffffffffff165b9050610ab3856080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610b875760c085015160a086015173ffffffffffffffffffffffffffffffffffffffff831691639a2ac6d591610af06040890160208a01612194565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b16815273ffffffffffffffffffffffffffffffffffffffff909216600483015263ffffffff166024820152606060448201525f60648201526084015f604051808303818588803b158015610b6b575f5ffd5b505af1158015610b7d573d5f5f3e3d5ffd5b5050505050610d51565b610b9a8560800151828760c00151611458565b610baa60608501604086016121b7565b15610c5c5760a085015160c08601516040517fffaad6a500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169263ffaad6a592610c2a9260040173ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b5f604051808303815f87803b158015610c41575f5ffd5b505af1158015610c53573d5f5f3e3d5ffd5b50505050610d51565b608085015173ffffffffffffffffffffffffffffffffffffffff82169063838b252090610c8c60208801886120b4565b60a089015160c08a0151610ca660408b0160208c01612194565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e088901b16815273ffffffffffffffffffffffffffffffffffffffff95861660048201529385166024850152939091166044830152606482015263ffffffff91909116608482015260c060a48201525f60c482015260e4015f604051808303815f87803b158015610d3a575f5ffd5b505af1158015610d4c573d5f5f3e3d5ffd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f185604051610d80919061221c565b60405180910390a15050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610db957610db48282611484565b505050565b610db48383836114f1565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610e37576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b805f03610e72576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610ecb5780341015610ec7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610ec773ffffffffffffffffffffffffffffffffffffffff831633308461155f565b5f73ffffffffffffffffffffffffffffffffffffffff821615610f2f57610f2a73ffffffffffffffffffffffffffffffffffffffff8316306115b7565b610f31565b475b92915050565b6060815f8167ffffffffffffffff811115610f5457610f54611c5c565b604051908082528060200260200182016040528015610f7d578160200160208202803683370190505b5090505f805b8381101561103657868682818110610f9d57610f9d612087565b9050602002810190610faf9190612158565b610fc09060808101906060016120b4565b9150610fcb82610eed565b838281518110610fdd57610fdd612087565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661102e573483828151811061101657611016612087565b6020026020010181815161102a919061204f565b9052505b600101610f83565b509095945050505050565b5f5b81811015610db4573683838381811061105e5761105e612087565b90506020028101906110709190612158565b905061108260e0820160c083016121b7565b156110a4576110a461109a60608301604084016120b4565b8260800135610e39565b50600101611043565b838383838260018114611374575f85856110c860018561204f565b8181106110d7576110d7612087565b90506020028101906110e99190612158565b6110fa9060808101906060016120b4565b90505f89815b818110156112a157368d8d8381811061111b5761111b612087565b905060200281019061112d9190612158565b905061115c61114260608301604084016120b4565b73ffffffffffffffffffffffffffffffffffffffff161590565b806111be57506111be61117560408301602084016120b4565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156111d557506111d561117560208301836120b4565b801561125857506112586111ec60a083018361232f565b6111fa916004915f91612397565b611203916123be565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61128e576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112988f826115ea565b50600101611100565b505f90505b6112b160018561204f565b81101561136c575f8888838181106112cb576112cb612087565b90506020028101906112dd9190612158565b6112ee9060808101906060016120b4565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146113635785828151811061133557611335612087565b602002602001015161134682610eed565b611350919061204f565b9250821561136357611363818885610d8f565b506001016112a6565b50505061144c565b875f5b8181101561144957368b8b8381811061139257611392612087565b90506020028101906113a49190612158565b90506113b961114260608301604084016120b4565b806113d257506113d261117560408301602084016120b4565b80156113e957506113e961117560208301836120b4565b801561140057506114006111ec60a083018361232f565b611436576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6114408d826115ea565b50600101611377565b50505b50505050505050505050565b610db48383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6118dd565b73ffffffffffffffffffffffffffffffffffffffff82166114d1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ec773ffffffffffffffffffffffffffffffffffffffff831682611a0a565b73ffffffffffffffffffffffffffffffffffffffff821661153e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610db473ffffffffffffffffffffffffffffffffffffffff84168383611a23565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166115aa57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6116206115fa60208301836120b4565b7f91765d13665119d9c89a9e8beb9cfeb4a5a44ca96d7513e297e1357af2479ef0611a6c565b611656576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611695576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6116a961114260608501604086016120b4565b6116b3575f6116b9565b82608001355b90505f6116d46116cf60608601604087016120b4565b610eed565b90505f6116ea6116cf60808701606088016120b4565b9050825f036117205761172061170660608701604088016120b4565b61171660408801602089016120b4565b8760800135611458565b846080013582101561176b576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610a00565b5f8061177a60208801886120b4565b73ffffffffffffffffffffffffffffffffffffffff168561179e60a08a018a61232f565b6040516117ac929190612424565b5f6040518083038185875af1925050503d805f81146117e6576040519150601f19603f3d011682016040523d82523d5f602084013e6117eb565b606091505b5091509150816117fe576117fe81611bd4565b5f6118126116cf60808a0160608b016120b4565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961184360208b018b6120b4565b61185360608c0160408d016120b4565b61186360808d0160608e016120b4565b8c60800135898711611875578661187f565b61187f8a8861204f565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841615611a045773ffffffffffffffffffffffffffffffffffffffff8316611946576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156119b9573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906119dd9190612433565b1015611a0457611a0473ffffffffffffffffffffffffffffffffffffffff85168483611bde565b50505050565b5f385f3884865af1610ec75763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611a63576390b8ec185f526004601cfd5b5f603452505050565b6040805173ffffffffffffffffffffffffffffffffffffffff84811660248084019190915283518084039091018152604490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167ffab46d660000000000000000000000000000000000000000000000000000000017905291515f928392839291861691611b00919061244a565b5f60405180830381855afa9150503d805f8114611b38576040519150601f19603f3d011682016040523d82523d5f602084013e611b3d565b606091505b5091509150818015611b50575080516040145b15611bca575f5f82806020019051810190611b6b9190612460565b90925090507f10ff0000000000000000000000000000000000000000000000000000000000007fffffff0000000000000000000000000000000000000000000000000000000000831601611bc7573b15159350610f3192505050565b50505b505050503b151590565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611a63575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611a6357633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611cad57611cad611c5c565b60405290565b5f82601f830112611cc2575f5ffd5b813567ffffffffffffffff811115611cdc57611cdc611c5c565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611d2957611d29611c5c565b604052818152838201602001851015611d40575f5ffd5b816020850160208301375f918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611d7d575f5ffd5b50565b8035611d8b81611d5c565b919050565b80358015158114611d8b575f5ffd5b5f6101408284031215611db0575f5ffd5b611db8611c89565b823581529050602082013567ffffffffffffffff811115611dd7575f5ffd5b611de384828501611cb3565b602083015250604082013567ffffffffffffffff811115611e02575f5ffd5b611e0e84828501611cb3565b604083015250611e2060608301611d80565b6060820152611e3160808301611d80565b6080820152611e4260a08301611d80565b60a082015260c0828101359082015260e08083013590820152611e686101008301611d90565b610100820152611e7b6101208301611d90565b61012082015292915050565b5f60608284031215611e97575f5ffd5b50919050565b5f5f5f5f60a08587031215611eb0575f5ffd5b843567ffffffffffffffff811115611ec6575f5ffd5b611ed287828801611d9f565b945050602085013567ffffffffffffffff811115611eee575f5ffd5b8501601f81018713611efe575f5ffd5b803567ffffffffffffffff811115611f14575f5ffd5b8760208260051b8401011115611f28575f5ffd5b60209190910193509150611f3f8660408701611e87565b905092959194509250565b5f5f5f60408486031215611f5c575f5ffd5b833567ffffffffffffffff811115611f72575f5ffd5b8401601f81018613611f82575f5ffd5b803567ffffffffffffffff811115611f98575f5ffd5b8660208260061b8401011115611fac575f5ffd5b602091820194509250840135611fc181611d5c565b809150509250925092565b5f5f60808385031215611fdd575f5ffd5b823567ffffffffffffffff811115611ff3575f5ffd5b611fff85828601611d9f565b92505061200f8460208501611e87565b90509250929050565b5f5f60408385031215612029575f5ffd5b823561203481611d5c565b9150602083013561204481611d5c565b809150509250929050565b81810381811115610f31577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f602082840312156120c4575f5ffd5b81356120cf81611d5c565b9392505050565b602080825281018290525f8360408301825b8581101561214e5782356120fb81611d5c565b73ffffffffffffffffffffffffffffffffffffffff168252602083013561212181611d5c565b73ffffffffffffffffffffffffffffffffffffffff166020830152604092830192909101906001016120e8565b5095945050505050565b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261218a575f5ffd5b9190910192915050565b5f602082840312156121a4575f5ffd5b813563ffffffff811681146120cf575f5ffd5b5f602082840312156121c7575f5ffd5b6120cf82611d90565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526122436101608401826121d0565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261227e82826121d0565b91505060608401516122a8608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161231761012085018215159052565b50610120840151801515610140850152509392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612362575f5ffd5b83018035915067ffffffffffffffff82111561237c575f5ffd5b602001915036819003821315612390575f5ffd5b9250929050565b5f5f858511156123a5575f5ffd5b838611156123b1575f5ffd5b5050820193919092039150565b80357fffffffff00000000000000000000000000000000000000000000000000000000811690600484101561241d577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215612443575f5ffd5b5051919050565b5f82518060208501845e5f920191825250919050565b5f5f60408385031215612471575f5ffd5b82517fffffff0000000000000000000000000000000000000000000000000000000000811681146124a0575f5ffd5b602084015190925061204481611d5c56fea2646970667358221220e6b7eedb4512895ce08b9c8d731570fc4b4db85ec2e82bbe2ead7ea19030f8e764736f6c634300081d0033";
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
