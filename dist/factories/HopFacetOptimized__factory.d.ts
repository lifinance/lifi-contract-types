import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { HopFacetOptimized, HopFacetOptimizedInterface } from "../HopFacetOptimized";
declare type HopFacetOptimizedConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class HopFacetOptimized__factory extends ContractFactory {
    constructor(...args: HopFacetOptimizedConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<HopFacetOptimized>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): HopFacetOptimized;
    connect(signer: Signer): HopFacetOptimized__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506126698061001c5f395ff3fe608060405260043610610093575f3560e01c806342afe79a116100665780638d03f4561161004c5780638d03f45614610123578063ca360ae014610136578063d40e64cc14610149575f5ffd5b806342afe79a146100fd57806355c99cd814610110575f5ffd5b806303add8c3146100975780630680ded4146100ac578063082bc047146100cb5780630b4cb5d8146100de575b5f5ffd5b6100aa6100a5366004611d47565b61015c565b005b3480156100b7575f5ffd5b506100aa6100c6366004611de1565b6102b5565b6100aa6100d9366004611d47565b61034d565b3480156100e9575f5ffd5b506100aa6100f8366004611d47565b6103b2565b6100aa61010b366004611f90565b6104ee565b6100aa61011e366004611d47565b610653565b6100aa610131366004611f90565b61072a565b6100aa610144366004611f90565b6107b8565b6100aa610157366004611f90565b610888565b61016c60c0820160a083016120e2565b73ffffffffffffffffffffffffffffffffffffffff1663deace8f561019a61010084013560c0860135612131565b60e08501356101af60c0870160a088016120e2565b8660c00135866060013587608001358860c00160208101906101d191906120e2565b60405160e089811b7fffffffff00000000000000000000000000000000000000000000000000000000168252600482019790975273ffffffffffffffffffffffffffffffffffffffff958616602482015260448101949094526064840192909252608483015290911660a48201529085013560c482015260e4015b5f604051808303818588803b158015610263575f5ffd5b505af1158015610275573d5f5f3e3d5ffd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516102a991906121eb565b60405180910390a15050565b6102bd6109af565b5f5b838110156103465761033e8383838181106102dc576102dc61232e565b90506020020160208101906102f191906120e2565b8686848181106103035761030361232e565b905060200201602081019061031891906120e2565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610a24565b6001016102bf565b5050505050565b61036c61036060a08401608085016120e2565b33308560c00135610a55565b61037c60c0820160a083016120e2565b73ffffffffffffffffffffffffffffffffffffffff1663deace8f561010083013560e08501356101af60c0870160a088016120e2565b6103c561036060a08401608085016120e2565b6103d560c0820160a083016120e2565b73ffffffffffffffffffffffffffffffffffffffff1663eea0d7b260e084013561040560c0860160a087016120e2565b604080517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b168152600481019390935273ffffffffffffffffffffffffffffffffffffffff909116602483015260c08601356044830152843560648301526020850135608483015284013560a4820152606084013560c4820152608084013560e4820152610104015f604051808303815f87803b1580156104a9575f5ffd5b505af11580156104bb573d5f5f3e3d5ffd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516102a991906121eb565b610508845f01518560c00151858533866101000135610b17565b60c08086019190915261052090820160a083016120e2565b73ffffffffffffffffffffffffffffffffffffffff1663deace8f58261010001358660e001518760a001518860c00151866060013587608001358860c001602081019061056d91906120e2565b60405160e089811b7fffffffff00000000000000000000000000000000000000000000000000000000168252600482019790975273ffffffffffffffffffffffffffffffffffffffff958616602482015260448101949094526064840192909252608483015290911660a48201529085013560c482015260e4015b5f604051808303818588803b1580156105ff575f5ffd5b505af1158015610611573d5f5f3e3d5ffd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18460405161064591906123a7565b60405180910390a150505050565b61066360c0820160a083016120e2565b73ffffffffffffffffffffffffffffffffffffffff1663eea0d7b260c0840180359060e0860135906106989060a088016120e2565b604080517fffffffff0000000000000000000000000000000000000000000000000000000060e087901b168152600481019390935273ffffffffffffffffffffffffffffffffffffffff909116602483015260c08701356044830152853560648301526020860135608483015285013560a4820152606085013560c4820152608085013560e48201526101040161024c565b610744845f01518560c00151858533866101000135610b17565b60c08086019190915261075c90820160a083016120e2565b73ffffffffffffffffffffffffffffffffffffffff1663deace8f58261010001358660c0015161078c9190612131565b8660e001518760a001518860c00151866060013587608001358860c001602081019061056d91906120e2565b6107cc845f01518560c00151858533610cb2565b60c0808601919091526107e490820160a083016120e2565b60c085015160e086015160a0870151604080517feea0d7b2000000000000000000000000000000000000000000000000000000008152600481019390935273ffffffffffffffffffffffffffffffffffffffff918216602484015260448301849052853560648401526020860135608484015285013560a4830152606085013560c4830152608085013560e4830152929092169163eea0d7b29190610104016105e8565b61089c845f01518560c00151858533610cb2565b60c0808601919091526108b490820160a083016120e2565b60e085015160a086015160c0870151604080517feea0d7b2000000000000000000000000000000000000000000000000000000008152600481019490945273ffffffffffffffffffffffffffffffffffffffff92831660248501526044840191909152843560648401526020850135608484015284013560a4830152606084013560c4830152608084013560e4830152919091169063eea0d7b290610104015f604051808303815f87803b15801561096a575f5ffd5b505af115801561097c573d5f5f3e3d5ffd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18460405161064591906123a7565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610a22576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b610a508383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610df0565b505050565b73ffffffffffffffffffffffffffffffffffffffff8416610aa2576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610aef576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b1173ffffffffffffffffffffffffffffffffffffffff8516848484610f17565b50505050565b5f83808203610b52576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8686610b606001856124b7565b818110610b6f57610b6f61232e565b9050602002810190610b8191906124ca565b610b929060808101906060016120e2565b90505f610b9e82610f6f565b905073ffffffffffffffffffffffffffffffffffffffff8216610bc857610bc534826124b7565b90505b5f610bd38989610fb9565b9050610bdf89896110c3565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610c1a818b8b8561112f565b5f83610c2586610f6f565b610c2f91906124b7565b905073ffffffffffffffffffffffffffffffffffffffff8516610c5957610c5688826124b7565b90505b8b811015610ca2576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b5f82808203610ced576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610cfb6001856124b7565b818110610d0a57610d0a61232e565b9050602002810190610d1c91906124ca565b610d2d9060808101906060016120e2565b90505f610d3982610f6f565b905073ffffffffffffffffffffffffffffffffffffffff8216610d6357610d6034826124b7565b90505b5f610d6e8888610fb9565b9050610d7a88886110c3565b610d878a8989898561151c565b5f82610d9285610f6f565b610d9c91906124b7565b905089811015610de2576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610c99565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841615610b115773ffffffffffffffffffffffffffffffffffffffff8316610e59576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015610ecc573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ef09190612506565b1015610b1157610b1173ffffffffffffffffffffffffffffffffffffffff851684836117e1565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610f6257637939f4245f526004601cfd5b5f60605260405250505050565b5f73ffffffffffffffffffffffffffffffffffffffff821615610fb157610fac73ffffffffffffffffffffffffffffffffffffffff831630611868565b610fb3565b475b92915050565b6060815f8167ffffffffffffffff811115610fd657610fd6611e4d565b604051908082528060200260200182016040528015610fff578160200160208202803683370190505b5090505f805b838110156110b85786868281811061101f5761101f61232e565b905060200281019061103191906124ca565b6110429060808101906060016120e2565b915061104d82610f6f565b83828151811061105f5761105f61232e565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166110b057348382815181106110985761109861232e565b602002602001018181516110ac91906124b7565b9052505b600101611005565b509095945050505050565b5f5b81811015610a5057368383838181106110e0576110e061232e565b90506020028101906110f291906124ca565b905061110460e0820160c0830161251d565b156111265761112661111c60608301604084016120e2565b826080013561189b565b506001016110c5565b602084015160408501518491849184908360018114611436575f86866111566001856124b7565b8181106111655761116561232e565b905060200281019061117791906124ca565b6111889060808101906060016120e2565b90505f89815b8181101561133157368d8d838181106111a9576111a961232e565b90506020028101906111bb91906124ca565b90506111ea6111d060608301604084016120e2565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061124c575061124c61120360408301602084016120e2565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015611263575061126361120360208301836120e2565b80156112e657506112e661127a60a0830183612536565b611288916004915f91612597565b611291916125be565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61131c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e51611328908261194f565b5060010161118e565b505f90505b6113416001856124b7565b81101561142e575f89898381811061135b5761135b61232e565b905060200281019061136d91906124ca565b61137e9060808101906060016120e2565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611425578682815181106113c5576113c561232e565b60200260200101516113d682610f6f565b6113e091906124b7565b92505f73ffffffffffffffffffffffffffffffffffffffff821615611405575f611407565b865b9050831561142357611423828a61141e84886124b7565b611bc2565b505b50600101611336565b505050611510565b875f5b8181101561150d57368b8b838181106114545761145461232e565b905060200281019061146691906124ca565b905061147b6111d060608301604084016120e2565b80611494575061149461120360408301602084016120e2565b80156114ab57506114ab61120360208301836120e2565b80156114c257506114c261127a60a0830183612536565b6114f8576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c51611504908261194f565b50600101611439565b50505b50505050505050505050565b83838383826001811461170c575f85856115376001856124b7565b8181106115465761154661232e565b905060200281019061155891906124ca565b6115699060808101906060016120e2565b90505f89815b8181101561164157368d8d8381811061158a5761158a61232e565b905060200281019061159c91906124ca565b90506115b16111d060608301604084016120e2565b806115ca57506115ca61120360408301602084016120e2565b80156115e157506115e161120360208301836120e2565b80156115f857506115f861127a60a0830183612536565b61162e576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6116388f8261194f565b5060010161156f565b505f90505b6116516001856124b7565b81101561142e575f88888381811061166b5761166b61232e565b905060200281019061167d91906124ca565b61168e9060808101906060016120e2565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611703578582815181106116d5576116d561232e565b60200260200101516116e682610f6f565b6116f091906124b7565b9250821561170357611703818885611bc2565b50600101611646565b875f5b8181101561150d57368b8b8381811061172a5761172a61232e565b905060200281019061173c91906124ca565b90506117516111d060608301604084016120e2565b8061176a575061176a61120360408301602084016120e2565b8015611781575061178161120360208301836120e2565b8015611798575061179861127a60a0830183612536565b6117ce576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6117d88d8261194f565b5060010161170f565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661185f575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661185f57633e3f8f735f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b805f036118d4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661192d5780341015611929576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61192973ffffffffffffffffffffffffffffffffffffffff8316333084610f17565b61196761195f60208301836120e2565b6017903b1190565b61199d576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036119dc576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6119f06111d060608501604086016120e2565b6119fa575f611a00565b82608001355b90505f611a1b611a1660808601606087016120e2565b610f6f565b9050815f03611a5157611a51611a3760608601604087016120e2565b611a4760408701602088016120e2565b8660800135610a24565b5f80611a6060208701876120e2565b73ffffffffffffffffffffffffffffffffffffffff1684611a8460a0890189612536565b604051611a92929190612624565b5f6040518083038185875af1925050503d805f8114611acc576040519150601f19603f3d011682016040523d82523d5f602084013e611ad1565b606091505b509150915081611ae457611ae481611bf2565b5f611af8611a166080890160608a016120e2565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3888611b2960208a018a6120e2565b611b3960608b0160408c016120e2565b611b4960808c0160608d016120e2565b8b60800135898711611b5b5786611b65565b611b658a886124b7565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316611be757610a508282611bfc565b610a50838383611c69565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff8216611c49576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61192973ffffffffffffffffffffffffffffffffffffffff831682611cd7565b73ffffffffffffffffffffffffffffffffffffffff8216611cb6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a5073ffffffffffffffffffffffffffffffffffffffff84168383611cf0565b5f385f3884865af16119295763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661185f576390b8ec185f526004601cfd5b5f6101208284031215611d41575f5ffd5b50919050565b5f5f6101408385031215611d59575f5ffd5b823567ffffffffffffffff811115611d6f575f5ffd5b83016101408186031215611d81575f5ffd5b9150611d908460208501611d30565b90509250929050565b5f5f83601f840112611da9575f5ffd5b50813567ffffffffffffffff811115611dc0575f5ffd5b6020830191508360208260051b8501011115611dda575f5ffd5b9250929050565b5f5f5f5f60408587031215611df4575f5ffd5b843567ffffffffffffffff811115611e0a575f5ffd5b611e1687828801611d99565b909550935050602085013567ffffffffffffffff811115611e35575f5ffd5b611e4187828801611d99565b95989497509550505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611e9e57611e9e611e4d565b60405290565b5f82601f830112611eb3575f5ffd5b813567ffffffffffffffff811115611ecd57611ecd611e4d565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611f1a57611f1a611e4d565b604052818152838201602001851015611f31575f5ffd5b816020850160208301375f918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611f6e575f5ffd5b50565b8035611f7c81611f4d565b919050565b80358015158114611f7c575f5ffd5b5f5f5f5f6101608587031215611fa4575f5ffd5b843567ffffffffffffffff811115611fba575f5ffd5b85016101408188031215611fcc575f5ffd5b611fd4611e7a565b81358152602082013567ffffffffffffffff811115611ff1575f5ffd5b611ffd89828501611ea4565b602083015250604082013567ffffffffffffffff81111561201c575f5ffd5b61202889828501611ea4565b60408301525061203a60608301611f71565b606082015261204b60808301611f71565b608082015261205c60a08301611f71565b60a082015260c0828101359082015260e080830135908201526120826101008301611f81565b6101008201526120956101208301611f81565b610120820152945050602085013567ffffffffffffffff8111156120b7575f5ffd5b6120c387828801611d99565b90945092506120d790508660408701611d30565b905092959194509250565b5f602082840312156120f2575f5ffd5b81356120fd81611f4d565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b80820180821115610fb357610fb3612104565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612177575f5ffd5b830160208101925035905067ffffffffffffffff811115612196575f5ffd5b803603821315611dda575f5ffd5b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60208082528235828201525f9061220490840184612144565b610140604085015261221b610160850182846121a4565b91505061222b6040850185612144565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526122608382846121a4565b9250505061227060608501611f71565b73ffffffffffffffffffffffffffffffffffffffff811660808501525061229960808501611f71565b73ffffffffffffffffffffffffffffffffffffffff811660a0850152506122c260a08501611f71565b73ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084013560e08481019190915284013561010080850191909152612305908501611f81565b8015156101208501525061231c6101208501611f81565b8015156101408501525b509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526123ce61016084018261235b565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152612409828261235b565b9150506060840151612433608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516124a261012085018215159052565b50610120840151801515610140850152612326565b81810381811115610fb357610fb3612104565b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126124fc575f5ffd5b9190910192915050565b5f60208284031215612516575f5ffd5b5051919050565b5f6020828403121561252d575f5ffd5b6120fd82611f81565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612569575f5ffd5b83018035915067ffffffffffffffff821115612583575f5ffd5b602001915036819003821315611dda575f5ffd5b5f5f858511156125a5575f5ffd5b838611156125b1575f5ffd5b5050820193919092039150565b80357fffffffff00000000000000000000000000000000000000000000000000000000811690600484101561261d577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f910190815291905056fea2646970667358221220cd3aa57a7252a3dc62958b77cbcabba3420f126e4b09c6debfa1716092c4385964736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "setApprovalForBridges";
        readonly inputs: readonly [{
            readonly name: "bridges";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "tokensToApprove";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaHopL1ERC20";
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
            readonly name: "_hopData";
            readonly type: "tuple";
            readonly internalType: "struct HopFacetOptimized.HopData";
            readonly components: readonly [{
                readonly name: "bonderFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hopBridge";
                readonly type: "address";
                readonly internalType: "contract IHopBridge";
            }, {
                readonly name: "relayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaHopL1Native";
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
            readonly name: "_hopData";
            readonly type: "tuple";
            readonly internalType: "struct HopFacetOptimized.HopData";
            readonly components: readonly [{
                readonly name: "bonderFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hopBridge";
                readonly type: "address";
                readonly internalType: "contract IHopBridge";
            }, {
                readonly name: "relayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaHopL2ERC20";
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
            readonly name: "_hopData";
            readonly type: "tuple";
            readonly internalType: "struct HopFacetOptimized.HopData";
            readonly components: readonly [{
                readonly name: "bonderFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hopBridge";
                readonly type: "address";
                readonly internalType: "contract IHopBridge";
            }, {
                readonly name: "relayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaHopL2Native";
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
            readonly name: "_hopData";
            readonly type: "tuple";
            readonly internalType: "struct HopFacetOptimized.HopData";
            readonly components: readonly [{
                readonly name: "bonderFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hopBridge";
                readonly type: "address";
                readonly internalType: "contract IHopBridge";
            }, {
                readonly name: "relayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaHopL1ERC20";
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
            readonly name: "_hopData";
            readonly type: "tuple";
            readonly internalType: "struct HopFacetOptimized.HopData";
            readonly components: readonly [{
                readonly name: "bonderFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hopBridge";
                readonly type: "address";
                readonly internalType: "contract IHopBridge";
            }, {
                readonly name: "relayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaHopL1Native";
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
            readonly name: "_hopData";
            readonly type: "tuple";
            readonly internalType: "struct HopFacetOptimized.HopData";
            readonly components: readonly [{
                readonly name: "bonderFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hopBridge";
                readonly type: "address";
                readonly internalType: "contract IHopBridge";
            }, {
                readonly name: "relayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaHopL2ERC20";
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
            readonly name: "_hopData";
            readonly type: "tuple";
            readonly internalType: "struct HopFacetOptimized.HopData";
            readonly components: readonly [{
                readonly name: "bonderFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hopBridge";
                readonly type: "address";
                readonly internalType: "contract IHopBridge";
            }, {
                readonly name: "relayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaHopL2Native";
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
            readonly name: "_hopData";
            readonly type: "tuple";
            readonly internalType: "struct HopFacetOptimized.HopData";
            readonly components: readonly [{
                readonly name: "bonderFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hopBridge";
                readonly type: "address";
                readonly internalType: "contract IHopBridge";
            }, {
                readonly name: "relayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nativeFee";
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
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "OnlyContractOwner";
        readonly inputs: readonly [];
    }];
    static createInterface(): HopFacetOptimizedInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): HopFacetOptimized;
}
export {};
