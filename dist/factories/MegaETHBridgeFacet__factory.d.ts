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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506123a78061001c5f395ff3fe60806040526004361061003e575f3560e01c806322256e89146100425780633f44d05f146100575780634213dfff14610076578063b5a580ae14610089575b5f5ffd5b610055610050366004611cfd565b6100a8565b005b348015610062575f5ffd5b50610055610071366004611daa565b6102d5565b610055610084366004611de1565b610449565b348015610094575f5ffd5b506100556100a3366004611e2d565b610669565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610123576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101333447611eaf565b905086806101000151610172576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101b0576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101d38160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561020a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610247576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610284576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102988a5f01518b60c001518b8b33610921565b60c08b01526102a78a88610a63565b5047915050818111156102c8576102c85f846102c38585611eaf565b610da9565b50505f9091555050505050565b6102dd610dde565b7fcb9e6c8161b0edb24a4ba5c57d1b9376798dd51f830f1aecd967c1a3b9748131547fcb9e6c8161b0edb24a4ba5c57d1b9376798dd51f830f1aecd967c1a3b97481309074010000000000000000000000000000000000000000900460ff16610372576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166103bf576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8381165f818152602084815260409182902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169487169485179055905192835290917ff4630b7492ff2bf9c0e541238b1ba50baf1b992e27998b5d2f501e9bcdf4a37b910160405180910390a2505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016104c4576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6104d43447611eaf565b90508480610100015115610514576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610120015115610552576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866105758160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156105ac576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036105e9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610626576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61063888608001518960c00151610e53565b6106428888610a63565b50479150508181111561065e5761065e5f846102c38585611eaf565b50505f909155505050565b610671610dde565b7fcb9e6c8161b0edb24a4ba5c57d1b9376798dd51f830f1aecd967c1a3b9748131547fcb9e6c8161b0edb24a4ba5c57d1b9376798dd51f830f1aecd967c1a3b97481309074010000000000000000000000000000000000000000900460ff1615610707576040517f0dc149f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f5b8381101561083a575f85858381811061072457610724611ee7565b905060400201602001602081019061073c9190611f14565b73ffffffffffffffffffffffffffffffffffffffff1603610789576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84848281811061079b5761079b611ee7565b90506040020160200160208101906107b39190611f14565b825f8787858181106107c7576107c7611ee7565b6107dd9260206040909202019081019150611f14565b73ffffffffffffffffffffffffffffffffffffffff908116825260208201929092526040015f2080547fffffffffffffffffffffffff00000000000000000000000000000000000000001692909116919091179055600101610709565b5073ffffffffffffffffffffffffffffffffffffffff8216610888576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001810180547fffffffffffffffffffffff0000000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841617740100000000000000000000000000000000000000001790556040517fe4cb03dc27a25a069e8330089c15f40d78e36c9e7213bc181ad3bee503cdf3ea906109139086908690611f36565b60405180910390a150505050565b5f8280820361095c576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561096a600185611eaf565b81811061097957610979611ee7565b905060200281019061098b9190611fb8565b61099c906080810190606001611f14565b90505f6109a882610f07565b905073ffffffffffffffffffffffffffffffffffffffff82166109d2576109cf3482611eaf565b90505b5f6109dd8888610f51565b90506109e9888861105b565b6109f68a898989856110c7565b5f82610a0185610f07565b610a0b9190611eaf565b905089811015610a55576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b7fcb9e6c8161b0edb24a4ba5c57d1b9376798dd51f830f1aecd967c1a3b9748131547fcb9e6c8161b0edb24a4ba5c57d1b9376798dd51f830f1aecd967c1a3b97481309074010000000000000000000000000000000000000000900460ff16610af8576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608083015173ffffffffffffffffffffffffffffffffffffffff9081165f908152602083905260409020541680610b465750600181015473ffffffffffffffffffffffffffffffffffffffff165b608084015173ffffffffffffffffffffffffffffffffffffffff16610bfd5760c084015160a085015173ffffffffffffffffffffffffffffffffffffffff831691639a2ac6d591610b9d6040880160208901611ff4565b60405180602001604052805f8152506040518563ffffffff1660e01b8152600401610bca93929190612063565b5f604051808303818588803b158015610be1575f5ffd5b505af1158015610bf3573d5f5f3e3d5ffd5b5050505050610d7a565b610c108460800151828660c00151611289565b610c2060608401604085016120a6565b15610cd25760a084015160c08501516040517fffaad6a500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169263ffaad6a592610ca09260040173ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b5f604051808303815f87803b158015610cb7575f5ffd5b505af1158015610cc9573d5f5f3e3d5ffd5b50505050610d7a565b608084015173ffffffffffffffffffffffffffffffffffffffff82169063838b252090610d026020870187611f14565b60a088015160c0890151610d1c60408a0160208b01611ff4565b60405180602001604052805f8152506040518763ffffffff1660e01b8152600401610d4c969594939291906120bf565b5f604051808303815f87803b158015610d63575f5ffd5b505af1158015610d75573d5f5f3e3d5ffd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516109139190612143565b73ffffffffffffffffffffffffffffffffffffffff8316610dd357610dce82826112b5565b505050565b610dce838383611322565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610e51576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b805f03610e8c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610ee55780341015610ee1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610ee173ffffffffffffffffffffffffffffffffffffffff8316333084611390565b5f73ffffffffffffffffffffffffffffffffffffffff821615610f4957610f4473ffffffffffffffffffffffffffffffffffffffff8316306113e8565b610f4b565b475b92915050565b6060815f8167ffffffffffffffff811115610f6e57610f6e611abc565b604051908082528060200260200182016040528015610f97578160200160208202803683370190505b5090505f5f5b8381101561105057868682818110610fb757610fb7611ee7565b9050602002810190610fc99190611fb8565b610fda906080810190606001611f14565b9150610fe582610f07565b838281518110610ff757610ff7611ee7565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611048573483828151811061103057611030611ee7565b602002602001018181516110449190611eaf565b9052505b600101610f9d565b509095945050505050565b5f5b81811015610dce573683838381811061107857611078611ee7565b905060200281019061108a9190611fb8565b905061109c60e0820160c083016120a6565b156110be576110be6110b46060830160408401611f14565b8260800135610e53565b5060010161105d565b83838383825f5b8181101561126f57368a8a838181106110e9576110e9611ee7565b90506020028101906110fb9190611fb8565b905061112a6111106060830160408401611f14565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061118c575061118c6111436040830160208401611f14565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156111a357506111a36111436020830183611f14565b801561122657506112266111ba60a0830183612256565b6111c8916004915f916122be565b6111d1916122e5565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61125c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112668c8261141b565b506001016110ce565b505061127e848484845f61168e565b505050505050505050565b610dce8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6118a5565b73ffffffffffffffffffffffffffffffffffffffff8216611302576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ee173ffffffffffffffffffffffffffffffffffffffff8316826119d2565b73ffffffffffffffffffffffffffffffffffffffff821661136f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610dce73ffffffffffffffffffffffffffffffffffffffff841683836119eb565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166113db57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61143361142b6020830183611f14565b6017903b1190565b611469576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036114a8576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6114bc6111106060850160408601611f14565b6114c6575f6114cc565b82608001355b90505f6114e76114e26080860160608701611f14565b610f07565b9050815f0361151d5761151d6115036060860160408701611f14565b6115136040870160208801611f14565b8660800135611289565b5f8061152c6020870187611f14565b73ffffffffffffffffffffffffffffffffffffffff168461155060a0890189612256565b60405161155e92919061234b565b5f6040518083038185875af1925050503d805f8114611598576040519150601f19603f3d011682016040523d82523d5f602084013e61159d565b606091505b5091509150816115b0576115b081611a34565b5f6115c46114e26080890160608a01611f14565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886115f560208a018a611f14565b61160560608b0160408c01611f14565b61161560808c0160608d01611f14565b8b608001358987116116275786611631565b6116318a88611eaf565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f868261169d600182611eaf565b8181106116ac576116ac611ee7565b90506020028101906116be9190611fb8565b6116cf906080810190606001611f14565b90505f5f5f5f5f5f5f5b88811015611895576116ec60018a611eaf565b811080156116fb575088600114155b156117d6578d8d8281811061171257611712611ee7565b90506020028101906117249190611fb8565b611735906080810190606001611f14565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146117d6578a818151811061177c5761177c611ee7565b602002602001015161178d87610f07565b6117979190611eaf565b965073ffffffffffffffffffffffffffffffffffffffff8616156117bb575f6117bd565b895b9350838711156117d6576117d6868d6102c3878b611eaf565b8d8d828181106117e8576117e8611ee7565b90506020028101906117fa9190611fb8565b61180b906060810190604001611f14565b945061181685610f07565b925073ffffffffffffffffffffffffffffffffffffffff85161561183a575f61183c565b895b9150818311801561187957508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561188d5761188d858d6102c38587611eaf565b6001016116d9565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156119cc5773ffffffffffffffffffffffffffffffffffffffff831661190e576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611981573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906119a5919061235a565b10156119cc576119cc73ffffffffffffffffffffffffffffffffffffffff85168483611a3e565b50505050565b5f385f3884865af1610ee15763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611a2b576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611a2b575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611a2b57633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611b0d57611b0d611abc565b60405290565b5f82601f830112611b22575f5ffd5b813567ffffffffffffffff811115611b3c57611b3c611abc565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611b8957611b89611abc565b604052818152838201602001851015611ba0575f5ffd5b816020850160208301375f918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611bdd575f5ffd5b50565b8035611beb81611bbc565b919050565b80358015158114611beb575f5ffd5b5f6101408284031215611c10575f5ffd5b611c18611ae9565b823581529050602082013567ffffffffffffffff811115611c37575f5ffd5b611c4384828501611b13565b602083015250604082013567ffffffffffffffff811115611c62575f5ffd5b611c6e84828501611b13565b604083015250611c8060608301611be0565b6060820152611c9160808301611be0565b6080820152611ca260a08301611be0565b60a082015260c0828101359082015260e08083013590820152611cc86101008301611bf0565b610100820152611cdb6101208301611bf0565b61012082015292915050565b5f60608284031215611cf7575f5ffd5b50919050565b5f5f5f5f60a08587031215611d10575f5ffd5b843567ffffffffffffffff811115611d26575f5ffd5b611d3287828801611bff565b945050602085013567ffffffffffffffff811115611d4e575f5ffd5b8501601f81018713611d5e575f5ffd5b803567ffffffffffffffff811115611d74575f5ffd5b8760208260051b8401011115611d88575f5ffd5b60209190910193509150611d9f8660408701611ce7565b905092959194509250565b5f5f60408385031215611dbb575f5ffd5b8235611dc681611bbc565b91506020830135611dd681611bbc565b809150509250929050565b5f5f60808385031215611df2575f5ffd5b823567ffffffffffffffff811115611e08575f5ffd5b611e1485828601611bff565b925050611e248460208501611ce7565b90509250929050565b5f5f5f60408486031215611e3f575f5ffd5b833567ffffffffffffffff811115611e55575f5ffd5b8401601f81018613611e65575f5ffd5b803567ffffffffffffffff811115611e7b575f5ffd5b8660208260061b8401011115611e8f575f5ffd5b602091820194509250840135611ea481611bbc565b809150509250925092565b81810381811115610f4b577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f60208284031215611f24575f5ffd5b8135611f2f81611bbc565b9392505050565b602080825281018290525f8360408301825b85811015611fae578235611f5b81611bbc565b73ffffffffffffffffffffffffffffffffffffffff1682526020830135611f8181611bbc565b73ffffffffffffffffffffffffffffffffffffffff16602083015260409283019290910190600101611f48565b5095945050505050565b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611fea575f5ffd5b9190910192915050565b5f60208284031215612004575f5ffd5b813563ffffffff81168114611f2f575f5ffd5b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b73ffffffffffffffffffffffffffffffffffffffff8416815263ffffffff83166020820152606060408201525f61209d6060830184612017565b95945050505050565b5f602082840312156120b6575f5ffd5b611f2f82611bf0565b73ffffffffffffffffffffffffffffffffffffffff8716815273ffffffffffffffffffffffffffffffffffffffff8616602082015273ffffffffffffffffffffffffffffffffffffffff8516604082015283606082015263ffffffff8316608082015260c060a08201525f61213760c0830184612017565b98975050505050505050565b60208152815160208201525f6020830151610140604084015261216a610160840182612017565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526121a58282612017565b91505060608401516121cf608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161223e61012085018215159052565b50610120840151801515610140850152509392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612289575f5ffd5b83018035915067ffffffffffffffff8211156122a3575f5ffd5b6020019150368190038213156122b7575f5ffd5b9250929050565b5f5f858511156122cc575f5ffd5b838611156122d8575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612344577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f6020828403121561236a575f5ffd5b505191905056fea26469706673582212205579561e026ac086fe3aa411f7a09166b971e8e9b06deb4b75b35124d4a1314864736f6c634300081d0033";
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
