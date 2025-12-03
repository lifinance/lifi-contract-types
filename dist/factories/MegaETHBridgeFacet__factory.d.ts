import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { MegaETHBridgeFacet, MegaETHBridgeFacetInterface } from "../MegaETHBridgeFacet";
type MegaETHBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MegaETHBridgeFacet__factory extends ContractFactory {
    constructor(...args: MegaETHBridgeFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MegaETHBridgeFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MegaETHBridgeFacet;
    connect(signer: Signer): MegaETHBridgeFacet__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506123938061001c5f395ff3fe60806040526004361061003e575f3560e01c806322256e89146100425780633f44d05f146100575780634213dfff14610076578063b5a580ae14610089575b5f5ffd5b610055610050366004611ce9565b6100a8565b005b348015610062575f5ffd5b50610055610071366004611d96565b6102d5565b610055610084366004611dcd565b610449565b348015610094575f5ffd5b506100556100a3366004611e19565b610669565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610123576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101333447611e9b565b905086806101000151610172576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101b0576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101d38160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561020a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610247576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610284576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102988a5f01518b60c001518b8b33610927565b60c08b01526102a78a88610a69565b5047915050818111156102c8576102c85f846102c38585611e9b565b610daf565b50505f9091555050505050565b6102dd610de4565b7fcb9e6c8161b0edb24a4ba5c57d1b9376798dd51f830f1aecd967c1a3b9748131547fcb9e6c8161b0edb24a4ba5c57d1b9376798dd51f830f1aecd967c1a3b97481309074010000000000000000000000000000000000000000900460ff16610372576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166103bf576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8381165f818152602084815260409182902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169487169485179055905192835290917ff4630b7492ff2bf9c0e541238b1ba50baf1b992e27998b5d2f501e9bcdf4a37b910160405180910390a2505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016104c4576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6104d43447611e9b565b90508480610100015115610514576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610120015115610552576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866105758160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156105ac576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036105e9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610626576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61063888608001518960c00151610e59565b6106428888610a69565b50479150508181111561065e5761065e5f846102c38585611e9b565b50505f909155505050565b610671610de4565b7fcb9e6c8161b0edb24a4ba5c57d1b9376798dd51f830f1aecd967c1a3b9748131547fcb9e6c8161b0edb24a4ba5c57d1b9376798dd51f830f1aecd967c1a3b97481309074010000000000000000000000000000000000000000900460ff1615610707576040517f0dc149f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f5b838110156108405761075885858381811061072657610726611ed3565b905060400201602001602081019061073e9190611f00565b73ffffffffffffffffffffffffffffffffffffffff161590565b1561078f576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8484828181106107a1576107a1611ed3565b90506040020160200160208101906107b99190611f00565b825f8787858181106107cd576107cd611ed3565b6107e39260206040909202019081019150611f00565b73ffffffffffffffffffffffffffffffffffffffff908116825260208201929092526040015f2080547fffffffffffffffffffffffff00000000000000000000000000000000000000001692909116919091179055600101610709565b5073ffffffffffffffffffffffffffffffffffffffff821661088e576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001810180547fffffffffffffffffffffff0000000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841617740100000000000000000000000000000000000000001790556040517fe4cb03dc27a25a069e8330089c15f40d78e36c9e7213bc181ad3bee503cdf3ea906109199086908690611f22565b60405180910390a150505050565b5f82808203610962576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610970600185611e9b565b81811061097f5761097f611ed3565b90506020028101906109919190611fa4565b6109a2906080810190606001611f00565b90505f6109ae82610f0d565b905073ffffffffffffffffffffffffffffffffffffffff82166109d8576109d53482611e9b565b90505b5f6109e38888610f57565b90506109ef8888611061565b6109fc8a898989856110cd565b5f82610a0785610f0d565b610a119190611e9b565b905089811015610a5b576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b7fcb9e6c8161b0edb24a4ba5c57d1b9376798dd51f830f1aecd967c1a3b9748131547fcb9e6c8161b0edb24a4ba5c57d1b9376798dd51f830f1aecd967c1a3b97481309074010000000000000000000000000000000000000000900460ff16610afe576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608083015173ffffffffffffffffffffffffffffffffffffffff9081165f908152602083905260409020541680610b4c5750600181015473ffffffffffffffffffffffffffffffffffffffff165b608084015173ffffffffffffffffffffffffffffffffffffffff16610c035760c084015160a085015173ffffffffffffffffffffffffffffffffffffffff831691639a2ac6d591610ba36040880160208901611fe0565b60405180602001604052805f8152506040518563ffffffff1660e01b8152600401610bd09392919061204f565b5f604051808303818588803b158015610be7575f5ffd5b505af1158015610bf9573d5f5f3e3d5ffd5b5050505050610d80565b610c168460800151828660c00151611275565b610c266060840160408501612092565b15610cd85760a084015160c08501516040517fffaad6a500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169263ffaad6a592610ca69260040173ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b5f604051808303815f87803b158015610cbd575f5ffd5b505af1158015610ccf573d5f5f3e3d5ffd5b50505050610d80565b608084015173ffffffffffffffffffffffffffffffffffffffff82169063838b252090610d086020870187611f00565b60a088015160c0890151610d2260408a0160208b01611fe0565b60405180602001604052805f8152506040518763ffffffff1660e01b8152600401610d52969594939291906120ab565b5f604051808303815f87803b158015610d69575f5ffd5b505af1158015610d7b573d5f5f3e3d5ffd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f184604051610919919061212f565b73ffffffffffffffffffffffffffffffffffffffff8316610dd957610dd482826112a1565b505050565b610dd483838361130e565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610e57576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b805f03610e92576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610eeb5780341015610ee7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610ee773ffffffffffffffffffffffffffffffffffffffff831633308461137c565b5f73ffffffffffffffffffffffffffffffffffffffff821615610f4f57610f4a73ffffffffffffffffffffffffffffffffffffffff8316306113d4565b610f51565b475b92915050565b6060815f8167ffffffffffffffff811115610f7457610f74611aa8565b604051908082528060200260200182016040528015610f9d578160200160208202803683370190505b5090505f5f5b8381101561105657868682818110610fbd57610fbd611ed3565b9050602002810190610fcf9190611fa4565b610fe0906080810190606001611f00565b9150610feb82610f0d565b838281518110610ffd57610ffd611ed3565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661104e573483828151811061103657611036611ed3565b6020026020010181815161104a9190611e9b565b9052505b600101610fa3565b509095945050505050565b5f5b81811015610dd4573683838381811061107e5761107e611ed3565b90506020028101906110909190611fa4565b90506110a260e0820160c08301612092565b156110c4576110c46110ba6060830160408401611f00565b8260800135610e59565b50600101611063565b83838383825f5b8181101561125b57368a8a838181106110ef576110ef611ed3565b90506020028101906111019190611fa4565b905061111661073e6060830160408401611f00565b80611178575061117861112f6040830160208401611f00565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561118f575061118f61112f6020830183611f00565b801561121257506112126111a660a0830183612242565b6111b4916004915f916122aa565b6111bd916122d1565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611248576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112528c82611407565b506001016110d4565b505061126a848484845f61167a565b505050505050505050565b610dd48383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611891565b73ffffffffffffffffffffffffffffffffffffffff82166112ee576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ee773ffffffffffffffffffffffffffffffffffffffff8316826119be565b73ffffffffffffffffffffffffffffffffffffffff821661135b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610dd473ffffffffffffffffffffffffffffffffffffffff841683836119d7565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166113c757637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61141f6114176020830183611f00565b6017903b1190565b611455576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611494576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6114a861073e6060850160408601611f00565b6114b2575f6114b8565b82608001355b90505f6114d36114ce6080860160608701611f00565b610f0d565b9050815f03611509576115096114ef6060860160408701611f00565b6114ff6040870160208801611f00565b8660800135611275565b5f806115186020870187611f00565b73ffffffffffffffffffffffffffffffffffffffff168461153c60a0890189612242565b60405161154a929190612337565b5f6040518083038185875af1925050503d805f8114611584576040519150601f19603f3d011682016040523d82523d5f602084013e611589565b606091505b50915091508161159c5761159c81611a20565b5f6115b06114ce6080890160608a01611f00565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886115e160208a018a611f00565b6115f160608b0160408c01611f00565b61160160808c0160608d01611f00565b8b60800135898711611613578661161d565b61161d8a88611e9b565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611689600182611e9b565b81811061169857611698611ed3565b90506020028101906116aa9190611fa4565b6116bb906080810190606001611f00565b90505f5f5f5f5f5f5f5b88811015611881576116d860018a611e9b565b811080156116e7575088600114155b156117c2578d8d828181106116fe576116fe611ed3565b90506020028101906117109190611fa4565b611721906080810190606001611f00565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146117c2578a818151811061176857611768611ed3565b602002602001015161177987610f0d565b6117839190611e9b565b965073ffffffffffffffffffffffffffffffffffffffff8616156117a7575f6117a9565b895b9350838711156117c2576117c2868d6102c3878b611e9b565b8d8d828181106117d4576117d4611ed3565b90506020028101906117e69190611fa4565b6117f7906060810190604001611f00565b945061180285610f0d565b925073ffffffffffffffffffffffffffffffffffffffff851615611826575f611828565b895b9150818311801561186557508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561187957611879858d6102c38587611e9b565b6001016116c5565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156119b85773ffffffffffffffffffffffffffffffffffffffff83166118fa576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561196d573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906119919190612346565b10156119b8576119b873ffffffffffffffffffffffffffffffffffffffff85168483611a2a565b50505050565b5f385f3884865af1610ee75763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611a17576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611a17575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611a1757633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611af957611af9611aa8565b60405290565b5f82601f830112611b0e575f5ffd5b813567ffffffffffffffff811115611b2857611b28611aa8565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611b7557611b75611aa8565b604052818152838201602001851015611b8c575f5ffd5b816020850160208301375f918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611bc9575f5ffd5b50565b8035611bd781611ba8565b919050565b80358015158114611bd7575f5ffd5b5f6101408284031215611bfc575f5ffd5b611c04611ad5565b823581529050602082013567ffffffffffffffff811115611c23575f5ffd5b611c2f84828501611aff565b602083015250604082013567ffffffffffffffff811115611c4e575f5ffd5b611c5a84828501611aff565b604083015250611c6c60608301611bcc565b6060820152611c7d60808301611bcc565b6080820152611c8e60a08301611bcc565b60a082015260c0828101359082015260e08083013590820152611cb46101008301611bdc565b610100820152611cc76101208301611bdc565b61012082015292915050565b5f60608284031215611ce3575f5ffd5b50919050565b5f5f5f5f60a08587031215611cfc575f5ffd5b843567ffffffffffffffff811115611d12575f5ffd5b611d1e87828801611beb565b945050602085013567ffffffffffffffff811115611d3a575f5ffd5b8501601f81018713611d4a575f5ffd5b803567ffffffffffffffff811115611d60575f5ffd5b8760208260051b8401011115611d74575f5ffd5b60209190910193509150611d8b8660408701611cd3565b905092959194509250565b5f5f60408385031215611da7575f5ffd5b8235611db281611ba8565b91506020830135611dc281611ba8565b809150509250929050565b5f5f60808385031215611dde575f5ffd5b823567ffffffffffffffff811115611df4575f5ffd5b611e0085828601611beb565b925050611e108460208501611cd3565b90509250929050565b5f5f5f60408486031215611e2b575f5ffd5b833567ffffffffffffffff811115611e41575f5ffd5b8401601f81018613611e51575f5ffd5b803567ffffffffffffffff811115611e67575f5ffd5b8660208260061b8401011115611e7b575f5ffd5b602091820194509250840135611e9081611ba8565b809150509250925092565b81810381811115610f51577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f60208284031215611f10575f5ffd5b8135611f1b81611ba8565b9392505050565b602080825281018290525f8360408301825b85811015611f9a578235611f4781611ba8565b73ffffffffffffffffffffffffffffffffffffffff1682526020830135611f6d81611ba8565b73ffffffffffffffffffffffffffffffffffffffff16602083015260409283019290910190600101611f34565b5095945050505050565b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611fd6575f5ffd5b9190910192915050565b5f60208284031215611ff0575f5ffd5b813563ffffffff81168114611f1b575f5ffd5b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b73ffffffffffffffffffffffffffffffffffffffff8416815263ffffffff83166020820152606060408201525f6120896060830184612003565b95945050505050565b5f602082840312156120a2575f5ffd5b611f1b82611bdc565b73ffffffffffffffffffffffffffffffffffffffff8716815273ffffffffffffffffffffffffffffffffffffffff8616602082015273ffffffffffffffffffffffffffffffffffffffff8516604082015283606082015263ffffffff8316608082015260c060a08201525f61212360c0830184612003565b98975050505050505050565b60208152815160208201525f60208301516101406040840152612156610160840182612003565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526121918282612003565b91505060608401516121bb608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161222a61012085018215159052565b50610120840151801515610140850152509392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612275575f5ffd5b83018035915067ffffffffffffffff82111561228f575f5ffd5b6020019150368190038213156122a3575f5ffd5b9250929050565b5f5f858511156122b8575f5ffd5b838611156122c4575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612330577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215612356575f5ffd5b505191905056fea264697066735822122074c94430bd29ca44ca93a1137e17bc7ebd6f2ba1a8fe6f876bba852a2aab264764736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "initMegaETH";
        readonly inputs: readonly [{
            readonly name: "_configs";
            readonly type: "tuple[]";
            readonly internalType: "struct MegaETHBridgeFacet.Config[]";
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
            readonly name: "_defaultBridge";
            readonly type: "address";
            readonly internalType: "contract IL1StandardBridge";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "registerMegaETHBridge";
        readonly inputs: readonly [{
            readonly name: "_assetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_bridge";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaMegaETHBridge";
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
            readonly name: "_megaETHData";
            readonly type: "tuple";
            readonly internalType: "struct MegaETHBridgeFacet.MegaETHData";
            readonly components: readonly [{
                readonly name: "assetIdOnL2";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "l2Gas";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "requiresDepositTo";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaMegaETHBridge";
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
            readonly name: "_megaETHData";
            readonly type: "tuple";
            readonly internalType: "struct MegaETHBridgeFacet.MegaETHData";
            readonly components: readonly [{
                readonly name: "assetIdOnL2";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "l2Gas";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "requiresDepositTo";
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
        readonly name: "MegaETHBridgeRegistered";
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
        readonly name: "MegaETHInitialized";
        readonly inputs: readonly [{
            readonly name: "configs";
            readonly type: "tuple[]";
            readonly indexed: false;
            readonly internalType: "struct MegaETHBridgeFacet.Config[]";
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
    static createInterface(): MegaETHBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MegaETHBridgeFacet;
}
export {};
