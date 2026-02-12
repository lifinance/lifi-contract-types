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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506124608061001c5f395ff3fe60806040526004361061003e575f3560e01c806322256e89146100425780633f44d05f146100575780634213dfff14610076578063b5a580ae14610089575b5f5ffd5b610055610050366004611db6565b6100a8565b005b348015610062575f5ffd5b50610055610071366004611e63565b6102d5565b610055610084366004611e9a565b610449565b348015610094575f5ffd5b506100556100a3366004611ee6565b610669565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610123576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101333447611f68565b905086806101000151610172576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101b0576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101d38160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561020a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610247576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610284576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102988a5f01518b60c001518b8b33610927565b60c08b01526102a78a88610a69565b5047915050818111156102c8576102c85f846102c38585611f68565b610df6565b50505f9091555050505050565b6102dd610e2b565b7fcb9e6c8161b0edb24a4ba5c57d1b9376798dd51f830f1aecd967c1a3b9748131547fcb9e6c8161b0edb24a4ba5c57d1b9376798dd51f830f1aecd967c1a3b97481309074010000000000000000000000000000000000000000900460ff16610372576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166103bf576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8381165f818152602084815260409182902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169487169485179055905192835290917ff4630b7492ff2bf9c0e541238b1ba50baf1b992e27998b5d2f501e9bcdf4a37b910160405180910390a2505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016104c4576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6104d43447611f68565b90508480610100015115610514576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610120015115610552576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866105758160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156105ac576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036105e9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610626576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61063888608001518960c00151610ea0565b6106428888610a69565b50479150508181111561065e5761065e5f846102c38585611f68565b50505f909155505050565b610671610e2b565b7fcb9e6c8161b0edb24a4ba5c57d1b9376798dd51f830f1aecd967c1a3b9748131547fcb9e6c8161b0edb24a4ba5c57d1b9376798dd51f830f1aecd967c1a3b97481309074010000000000000000000000000000000000000000900460ff1615610707576040517f0dc149f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f5b838110156108405761075885858381811061072657610726611fa0565b905060400201602001602081019061073e9190611fcd565b73ffffffffffffffffffffffffffffffffffffffff161590565b1561078f576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8484828181106107a1576107a1611fa0565b90506040020160200160208101906107b99190611fcd565b825f8787858181106107cd576107cd611fa0565b6107e39260206040909202019081019150611fcd565b73ffffffffffffffffffffffffffffffffffffffff908116825260208201929092526040015f2080547fffffffffffffffffffffffff00000000000000000000000000000000000000001692909116919091179055600101610709565b5073ffffffffffffffffffffffffffffffffffffffff821661088e576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001810180547fffffffffffffffffffffff0000000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841617740100000000000000000000000000000000000000001790556040517fe4cb03dc27a25a069e8330089c15f40d78e36c9e7213bc181ad3bee503cdf3ea906109199086908690611fef565b60405180910390a150505050565b5f82808203610962576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610970600185611f68565b81811061097f5761097f611fa0565b90506020028101906109919190612071565b6109a2906080810190606001611fcd565b90505f6109ae82610f54565b905073ffffffffffffffffffffffffffffffffffffffff82166109d8576109d53482611f68565b90505b5f6109e38888610f9e565b90506109ef88886110a8565b6109fc8a89898985611114565b5f82610a0785610f54565b610a119190611f68565b905089811015610a5b576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b7fcb9e6c8161b0edb24a4ba5c57d1b9376798dd51f830f1aecd967c1a3b9748131547fcb9e6c8161b0edb24a4ba5c57d1b9376798dd51f830f1aecd967c1a3b97481309074010000000000000000000000000000000000000000900460ff16610afe576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608083015173ffffffffffffffffffffffffffffffffffffffff9081165f908152602083905260409020541680610b4c5750600181015473ffffffffffffffffffffffffffffffffffffffff165b608084015173ffffffffffffffffffffffffffffffffffffffff16610c035760c084015160a085015173ffffffffffffffffffffffffffffffffffffffff831691639a2ac6d591610ba360408801602089016120ad565b60405180602001604052805f8152506040518563ffffffff1660e01b8152600401610bd09392919061211c565b5f604051808303818588803b158015610be7575f5ffd5b505af1158015610bf9573d5f5f3e3d5ffd5b5050505050610dc7565b610c168460800151828660c00151611342565b610c26606084016040850161215f565b15610cd85760a084015160c08501516040517fffaad6a500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169263ffaad6a592610ca69260040173ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b5f604051808303815f87803b158015610cbd575f5ffd5b505af1158015610ccf573d5f5f3e3d5ffd5b50505050610dc7565b610ce861073e6020850185611fcd565b15610d1f576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608084015173ffffffffffffffffffffffffffffffffffffffff82169063838b252090610d4f6020870187611fcd565b60a088015160c0890151610d6960408a0160208b016120ad565b60405180602001604052805f8152506040518763ffffffff1660e01b8152600401610d9996959493929190612178565b5f604051808303815f87803b158015610db0575f5ffd5b505af1158015610dc2573d5f5f3e3d5ffd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18460405161091991906121fc565b73ffffffffffffffffffffffffffffffffffffffff8316610e2057610e1b828261136e565b505050565b610e1b8383836113db565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610e9e576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b805f03610ed9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610f325780341015610f2e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610f2e73ffffffffffffffffffffffffffffffffffffffff8316333084611449565b5f73ffffffffffffffffffffffffffffffffffffffff821615610f9657610f9173ffffffffffffffffffffffffffffffffffffffff8316306114a1565b610f98565b475b92915050565b6060815f8167ffffffffffffffff811115610fbb57610fbb611b75565b604051908082528060200260200182016040528015610fe4578160200160208202803683370190505b5090505f5f5b8381101561109d5786868281811061100457611004611fa0565b90506020028101906110169190612071565b611027906080810190606001611fcd565b915061103282610f54565b83828151811061104457611044611fa0565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611095573483828151811061107d5761107d611fa0565b602002602001018181516110919190611f68565b9052505b600101610fea565b509095945050505050565b5f5b81811015610e1b57368383838181106110c5576110c5611fa0565b90506020028101906110d79190612071565b90506110e960e0820160c0830161215f565b1561110b5761110b6111016060830160408401611fcd565b8260800135610ea0565b506001016110aa565b83838383825f80805b8381101561132657368c8c8381811061113857611138611fa0565b905060200281019061114a9190612071565b90506111596020820182611fcd565b935061116b6040820160208301611fcd565b925061120e8461117e60a084018461230f565b61118c916004915f91612377565b6111959161239e565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b15806112dc575061122861073e6060830160408401611fcd565b15801561126157508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b80156112dc575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b15611313576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61131d8e826114d4565b5060010161111d565b50505050611337848484845f611747565b505050505050505050565b610e1b8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61195e565b73ffffffffffffffffffffffffffffffffffffffff82166113bb576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f2e73ffffffffffffffffffffffffffffffffffffffff831682611a8b565b73ffffffffffffffffffffffffffffffffffffffff8216611428576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e1b73ffffffffffffffffffffffffffffffffffffffff84168383611aa4565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661149457637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6114ec6114e46020830183611fcd565b6017903b1190565b611522576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611561576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61157561073e6060850160408601611fcd565b61157f575f611585565b82608001355b90505f6115a061159b6080860160608701611fcd565b610f54565b9050815f036115d6576115d66115bc6060860160408701611fcd565b6115cc6040870160208801611fcd565b8660800135611342565b5f806115e56020870187611fcd565b73ffffffffffffffffffffffffffffffffffffffff168461160960a089018961230f565b604051611617929190612404565b5f6040518083038185875af1925050503d805f8114611651576040519150601f19603f3d011682016040523d82523d5f602084013e611656565b606091505b5091509150816116695761166981611aed565b5f61167d61159b6080890160608a01611fcd565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886116ae60208a018a611fcd565b6116be60608b0160408c01611fcd565b6116ce60808c0160608d01611fcd565b8b608001358987116116e057866116ea565b6116ea8a88611f68565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611756600182611f68565b81811061176557611765611fa0565b90506020028101906117779190612071565b611788906080810190606001611fcd565b90505f5f5f5f5f5f5f5b8881101561194e576117a560018a611f68565b811080156117b4575088600114155b1561188f578d8d828181106117cb576117cb611fa0565b90506020028101906117dd9190612071565b6117ee906080810190606001611fcd565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161461188f578a818151811061183557611835611fa0565b602002602001015161184687610f54565b6118509190611f68565b965073ffffffffffffffffffffffffffffffffffffffff861615611874575f611876565b895b93508387111561188f5761188f868d6102c3878b611f68565b8d8d828181106118a1576118a1611fa0565b90506020028101906118b39190612071565b6118c4906060810190604001611fcd565b94506118cf85610f54565b925073ffffffffffffffffffffffffffffffffffffffff8516156118f3575f6118f5565b895b9150818311801561193257508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561194657611946858d6102c38587611f68565b600101611792565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841615611a855773ffffffffffffffffffffffffffffffffffffffff83166119c7576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611a3a573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611a5e9190612413565b1015611a8557611a8573ffffffffffffffffffffffffffffffffffffffff85168483611af7565b50505050565b5f385f3884865af1610f2e5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611ae4576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611ae4575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611ae457633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611bc657611bc6611b75565b60405290565b5f82601f830112611bdb575f5ffd5b813567ffffffffffffffff811115611bf557611bf5611b75565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611c4257611c42611b75565b604052818152838201602001851015611c59575f5ffd5b816020850160208301375f918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611c96575f5ffd5b50565b8035611ca481611c75565b919050565b80358015158114611ca4575f5ffd5b5f6101408284031215611cc9575f5ffd5b611cd1611ba2565b823581529050602082013567ffffffffffffffff811115611cf0575f5ffd5b611cfc84828501611bcc565b602083015250604082013567ffffffffffffffff811115611d1b575f5ffd5b611d2784828501611bcc565b604083015250611d3960608301611c99565b6060820152611d4a60808301611c99565b6080820152611d5b60a08301611c99565b60a082015260c0828101359082015260e08083013590820152611d816101008301611ca9565b610100820152611d946101208301611ca9565b61012082015292915050565b5f60608284031215611db0575f5ffd5b50919050565b5f5f5f5f60a08587031215611dc9575f5ffd5b843567ffffffffffffffff811115611ddf575f5ffd5b611deb87828801611cb8565b945050602085013567ffffffffffffffff811115611e07575f5ffd5b8501601f81018713611e17575f5ffd5b803567ffffffffffffffff811115611e2d575f5ffd5b8760208260051b8401011115611e41575f5ffd5b60209190910193509150611e588660408701611da0565b905092959194509250565b5f5f60408385031215611e74575f5ffd5b8235611e7f81611c75565b91506020830135611e8f81611c75565b809150509250929050565b5f5f60808385031215611eab575f5ffd5b823567ffffffffffffffff811115611ec1575f5ffd5b611ecd85828601611cb8565b925050611edd8460208501611da0565b90509250929050565b5f5f5f60408486031215611ef8575f5ffd5b833567ffffffffffffffff811115611f0e575f5ffd5b8401601f81018613611f1e575f5ffd5b803567ffffffffffffffff811115611f34575f5ffd5b8660208260061b8401011115611f48575f5ffd5b602091820194509250840135611f5d81611c75565b809150509250925092565b81810381811115610f98577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f60208284031215611fdd575f5ffd5b8135611fe881611c75565b9392505050565b602080825281018290525f8360408301825b8581101561206757823561201481611c75565b73ffffffffffffffffffffffffffffffffffffffff168252602083013561203a81611c75565b73ffffffffffffffffffffffffffffffffffffffff16602083015260409283019290910190600101612001565b5095945050505050565b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126120a3575f5ffd5b9190910192915050565b5f602082840312156120bd575f5ffd5b813563ffffffff81168114611fe8575f5ffd5b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b73ffffffffffffffffffffffffffffffffffffffff8416815263ffffffff83166020820152606060408201525f61215660608301846120d0565b95945050505050565b5f6020828403121561216f575f5ffd5b611fe882611ca9565b73ffffffffffffffffffffffffffffffffffffffff8716815273ffffffffffffffffffffffffffffffffffffffff8616602082015273ffffffffffffffffffffffffffffffffffffffff8516604082015283606082015263ffffffff8316608082015260c060a08201525f6121f060c08301846120d0565b98975050505050505050565b60208152815160208201525f602083015161014060408401526122236101608401826120d0565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261225e82826120d0565b9150506060840151612288608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516122f761012085018215159052565b50610120840151801515610140850152509392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612342575f5ffd5b83018035915067ffffffffffffffff82111561235c575f5ffd5b602001915036819003821315612370575f5ffd5b9250929050565b5f5f85851115612385575f5ffd5b83861115612391575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156123fd577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215612423575f5ffd5b505191905056fea2646970667358221220d5aee19c08fd4d74a5476b6eb82586b4bd7488a4a4890b222f45a33378423dff64736f6c634300081d0033";
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
        readonly name: "InvalidCallData";
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
