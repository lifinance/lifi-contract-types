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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506124778061001c5f395ff3fe60806040526004361061003e575f3560e01c806322256e89146100425780633f44d05f146100575780634213dfff14610076578063b5a580ae14610089575b5f5ffd5b610055610050366004611dcd565b6100a8565b005b348015610062575f5ffd5b50610055610071366004611e7a565b6102d5565b610055610084366004611eb1565b610449565b348015610094575f5ffd5b506100556100a3366004611efd565b610669565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610123576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101333447611f7f565b905086806101000151610172576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101b0576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101d38160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561020a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610247576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610284576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102988a5f01518b60c001518b8b33610927565b60c08b01526102a78a88610a69565b5047915050818111156102c8576102c85f846102c38585611f7f565b610df6565b50505f9091555050505050565b6102dd610e2b565b7fcb9e6c8161b0edb24a4ba5c57d1b9376798dd51f830f1aecd967c1a3b9748131547fcb9e6c8161b0edb24a4ba5c57d1b9376798dd51f830f1aecd967c1a3b97481309074010000000000000000000000000000000000000000900460ff16610372576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166103bf576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8381165f818152602084815260409182902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169487169485179055905192835290917ff4630b7492ff2bf9c0e541238b1ba50baf1b992e27998b5d2f501e9bcdf4a37b910160405180910390a2505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016104c4576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6104d43447611f7f565b90508480610100015115610514576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610120015115610552576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866105758160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156105ac576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036105e9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610626576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61063888608001518960c00151610ea0565b6106428888610a69565b50479150508181111561065e5761065e5f846102c38585611f7f565b50505f909155505050565b610671610e2b565b7fcb9e6c8161b0edb24a4ba5c57d1b9376798dd51f830f1aecd967c1a3b9748131547fcb9e6c8161b0edb24a4ba5c57d1b9376798dd51f830f1aecd967c1a3b97481309074010000000000000000000000000000000000000000900460ff1615610707576040517f0dc149f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f5b838110156108405761075885858381811061072657610726611fb7565b905060400201602001602081019061073e9190611fe4565b73ffffffffffffffffffffffffffffffffffffffff161590565b1561078f576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8484828181106107a1576107a1611fb7565b90506040020160200160208101906107b99190611fe4565b825f8787858181106107cd576107cd611fb7565b6107e39260206040909202019081019150611fe4565b73ffffffffffffffffffffffffffffffffffffffff908116825260208201929092526040015f2080547fffffffffffffffffffffffff00000000000000000000000000000000000000001692909116919091179055600101610709565b5073ffffffffffffffffffffffffffffffffffffffff821661088e576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001810180547fffffffffffffffffffffff0000000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841617740100000000000000000000000000000000000000001790556040517fe4cb03dc27a25a069e8330089c15f40d78e36c9e7213bc181ad3bee503cdf3ea906109199086908690612006565b60405180910390a150505050565b5f82808203610962576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610970600185611f7f565b81811061097f5761097f611fb7565b90506020028101906109919190612088565b6109a2906080810190606001611fe4565b90505f6109ae82610f54565b905073ffffffffffffffffffffffffffffffffffffffff82166109d8576109d53482611f7f565b90505b5f6109e38888610f9e565b90506109ef88886110a8565b6109fc8a89898985611114565b5f82610a0785610f54565b610a119190611f7f565b905089811015610a5b576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b7fcb9e6c8161b0edb24a4ba5c57d1b9376798dd51f830f1aecd967c1a3b9748131547fcb9e6c8161b0edb24a4ba5c57d1b9376798dd51f830f1aecd967c1a3b97481309074010000000000000000000000000000000000000000900460ff16610afe576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608083015173ffffffffffffffffffffffffffffffffffffffff9081165f908152602083905260409020541680610b4c5750600181015473ffffffffffffffffffffffffffffffffffffffff165b608084015173ffffffffffffffffffffffffffffffffffffffff16610c035760c084015160a085015173ffffffffffffffffffffffffffffffffffffffff831691639a2ac6d591610ba360408801602089016120c4565b60405180602001604052805f8152506040518563ffffffff1660e01b8152600401610bd093929190612133565b5f604051808303818588803b158015610be7575f5ffd5b505af1158015610bf9573d5f5f3e3d5ffd5b5050505050610dc7565b610c168460800151828660c00151611359565b610c266060840160408501612176565b15610cd85760a084015160c08501516040517fffaad6a500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169263ffaad6a592610ca69260040173ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b5f604051808303815f87803b158015610cbd575f5ffd5b505af1158015610ccf573d5f5f3e3d5ffd5b50505050610dc7565b610ce861073e6020850185611fe4565b15610d1f576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608084015173ffffffffffffffffffffffffffffffffffffffff82169063838b252090610d4f6020870187611fe4565b60a088015160c0890151610d6960408a0160208b016120c4565b60405180602001604052805f8152506040518763ffffffff1660e01b8152600401610d999695949392919061218f565b5f604051808303815f87803b158015610db0575f5ffd5b505af1158015610dc2573d5f5f3e3d5ffd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516109199190612213565b73ffffffffffffffffffffffffffffffffffffffff8316610e2057610e1b8282611385565b505050565b610e1b8383836113f2565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610e9e576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b805f03610ed9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610f325780341015610f2e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610f2e73ffffffffffffffffffffffffffffffffffffffff8316333084611460565b5f73ffffffffffffffffffffffffffffffffffffffff821615610f9657610f9173ffffffffffffffffffffffffffffffffffffffff8316306114b8565b610f98565b475b92915050565b6060815f8167ffffffffffffffff811115610fbb57610fbb611b8c565b604051908082528060200260200182016040528015610fe4578160200160208202803683370190505b5090505f5f5b8381101561109d5786868281811061100457611004611fb7565b90506020028101906110169190612088565b611027906080810190606001611fe4565b915061103282610f54565b83828151811061104457611044611fb7565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611095573483828151811061107d5761107d611fb7565b602002602001018181516110919190611f7f565b9052505b600101610fea565b509095945050505050565b5f5b81811015610e1b57368383838181106110c5576110c5611fb7565b90506020028101906110d79190612088565b90506110e960e0820160c08301612176565b1561110b5761110b6111016060830160408401611fe4565b8260800135610ea0565b506001016110aa565b83838383825f5b8181101561133f57368a8a8381811061113657611136611fb7565b90506020028101906111489190612088565b90506111f761115a6020830183611fe4565b61116760a0840184612326565b611175916004915f9161238e565b61117e916123b5565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b15806112f5575061121161073e6060830160408401611fe4565b15801561126557506112266020820182611fe4565b73ffffffffffffffffffffffffffffffffffffffff1661124c6040830160208401611fe4565b73ffffffffffffffffffffffffffffffffffffffff1614155b80156112f557506112f361127f6040830160208401611fe4565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff1690565b155b1561132c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113368c826114eb565b5060010161111b565b505061134e848484845f61175e565b505050505050505050565b610e1b8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611975565b73ffffffffffffffffffffffffffffffffffffffff82166113d2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f2e73ffffffffffffffffffffffffffffffffffffffff831682611aa2565b73ffffffffffffffffffffffffffffffffffffffff821661143f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e1b73ffffffffffffffffffffffffffffffffffffffff84168383611abb565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166114ab57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6115036114fb6020830183611fe4565b6017903b1190565b611539576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611578576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61158c61073e6060850160408601611fe4565b611596575f61159c565b82608001355b90505f6115b76115b26080860160608701611fe4565b610f54565b9050815f036115ed576115ed6115d36060860160408701611fe4565b6115e36040870160208801611fe4565b8660800135611359565b5f806115fc6020870187611fe4565b73ffffffffffffffffffffffffffffffffffffffff168461162060a0890189612326565b60405161162e92919061241b565b5f6040518083038185875af1925050503d805f8114611668576040519150601f19603f3d011682016040523d82523d5f602084013e61166d565b606091505b5091509150816116805761168081611b04565b5f6116946115b26080890160608a01611fe4565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886116c560208a018a611fe4565b6116d560608b0160408c01611fe4565b6116e560808c0160608d01611fe4565b8b608001358987116116f75786611701565b6117018a88611f7f565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f868261176d600182611f7f565b81811061177c5761177c611fb7565b905060200281019061178e9190612088565b61179f906080810190606001611fe4565b90505f5f5f5f5f5f5f5b88811015611965576117bc60018a611f7f565b811080156117cb575088600114155b156118a6578d8d828181106117e2576117e2611fb7565b90506020028101906117f49190612088565b611805906080810190606001611fe4565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146118a6578a818151811061184c5761184c611fb7565b602002602001015161185d87610f54565b6118679190611f7f565b965073ffffffffffffffffffffffffffffffffffffffff86161561188b575f61188d565b895b9350838711156118a6576118a6868d6102c3878b611f7f565b8d8d828181106118b8576118b8611fb7565b90506020028101906118ca9190612088565b6118db906060810190604001611fe4565b94506118e685610f54565b925073ffffffffffffffffffffffffffffffffffffffff85161561190a575f61190c565b895b9150818311801561194957508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561195d5761195d858d6102c38587611f7f565b6001016117a9565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841615611a9c5773ffffffffffffffffffffffffffffffffffffffff83166119de576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611a51573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611a75919061242a565b1015611a9c57611a9c73ffffffffffffffffffffffffffffffffffffffff85168483611b0e565b50505050565b5f385f3884865af1610f2e5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611afb576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611afb575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611afb57633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611bdd57611bdd611b8c565b60405290565b5f82601f830112611bf2575f5ffd5b813567ffffffffffffffff811115611c0c57611c0c611b8c565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611c5957611c59611b8c565b604052818152838201602001851015611c70575f5ffd5b816020850160208301375f918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611cad575f5ffd5b50565b8035611cbb81611c8c565b919050565b80358015158114611cbb575f5ffd5b5f6101408284031215611ce0575f5ffd5b611ce8611bb9565b823581529050602082013567ffffffffffffffff811115611d07575f5ffd5b611d1384828501611be3565b602083015250604082013567ffffffffffffffff811115611d32575f5ffd5b611d3e84828501611be3565b604083015250611d5060608301611cb0565b6060820152611d6160808301611cb0565b6080820152611d7260a08301611cb0565b60a082015260c0828101359082015260e08083013590820152611d986101008301611cc0565b610100820152611dab6101208301611cc0565b61012082015292915050565b5f60608284031215611dc7575f5ffd5b50919050565b5f5f5f5f60a08587031215611de0575f5ffd5b843567ffffffffffffffff811115611df6575f5ffd5b611e0287828801611ccf565b945050602085013567ffffffffffffffff811115611e1e575f5ffd5b8501601f81018713611e2e575f5ffd5b803567ffffffffffffffff811115611e44575f5ffd5b8760208260051b8401011115611e58575f5ffd5b60209190910193509150611e6f8660408701611db7565b905092959194509250565b5f5f60408385031215611e8b575f5ffd5b8235611e9681611c8c565b91506020830135611ea681611c8c565b809150509250929050565b5f5f60808385031215611ec2575f5ffd5b823567ffffffffffffffff811115611ed8575f5ffd5b611ee485828601611ccf565b925050611ef48460208501611db7565b90509250929050565b5f5f5f60408486031215611f0f575f5ffd5b833567ffffffffffffffff811115611f25575f5ffd5b8401601f81018613611f35575f5ffd5b803567ffffffffffffffff811115611f4b575f5ffd5b8660208260061b8401011115611f5f575f5ffd5b602091820194509250840135611f7481611c8c565b809150509250925092565b81810381811115610f98577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f60208284031215611ff4575f5ffd5b8135611fff81611c8c565b9392505050565b602080825281018290525f8360408301825b8581101561207e57823561202b81611c8c565b73ffffffffffffffffffffffffffffffffffffffff168252602083013561205181611c8c565b73ffffffffffffffffffffffffffffffffffffffff16602083015260409283019290910190600101612018565b5095945050505050565b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126120ba575f5ffd5b9190910192915050565b5f602082840312156120d4575f5ffd5b813563ffffffff81168114611fff575f5ffd5b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b73ffffffffffffffffffffffffffffffffffffffff8416815263ffffffff83166020820152606060408201525f61216d60608301846120e7565b95945050505050565b5f60208284031215612186575f5ffd5b611fff82611cc0565b73ffffffffffffffffffffffffffffffffffffffff8716815273ffffffffffffffffffffffffffffffffffffffff8616602082015273ffffffffffffffffffffffffffffffffffffffff8516604082015283606082015263ffffffff8316608082015260c060a08201525f61220760c08301846120e7565b98975050505050505050565b60208152815160208201525f6020830151610140604084015261223a6101608401826120e7565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261227582826120e7565b915050606084015161229f608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161230e61012085018215159052565b50610120840151801515610140850152509392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612359575f5ffd5b83018035915067ffffffffffffffff821115612373575f5ffd5b602001915036819003821315612387575f5ffd5b9250929050565b5f5f8585111561239c575f5ffd5b838611156123a8575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612414577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f6020828403121561243a575f5ffd5b505191905056fea264697066735822122029633e180d17e365327156c327fee5257166ae8fc8dd1a98eb5558c5fa89b1d164736f6c634300081d0033";
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
